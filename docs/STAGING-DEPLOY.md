# Staging deployment — GitHub → Hostinger

Pipeline: **Claude Code → GitHub `main` → GitHub Actions → Hostinger → `staging.derekcolebowen.com`**

The workflow (`.github/workflows/deploy-staging.yml`) is **manual only** (`workflow_dispatch`)
and deploys **only** the built static output (`dist/apps/web/`) to the Hostinger
**staging** document root. Production `public_html` is never touched by it.

---

## 1. Create the staging subdomain in Hostinger hPanel

1. Log in to **hPanel** → **Hosting** → select `derekcolebowen.com` → **Manage**.
2. Left menu → **Domains → Subdomains**.
3. **Create a new subdomain:**
   - Subdomain: `staging`
   - Domain: `derekcolebowen.com`
   - **Custom folder for subdomain:** leave the default — Hostinger will create a
     **separate document root**, typically:
     `/home/uXXXXXXXX/domains/derekcolebowen.com/public_html/staging`
     *(or a dedicated `.../staging.derekcolebowen.com/public_html` — note the exact
     path it shows; you need it for `HOSTINGER_STAGING_PATH`.)*
   - Click **Create**. This does **not** touch `public_html` (production).
4. Left menu → **Security → SSL** → ensure an SSL certificate is issued for
   `staging.derekcolebowen.com` (Hostinger auto-issues free SSL; click **Install**
   if it isn't active yet). Wait until it shows **Active**.

> If DNS for `derekcolebowen.com` is managed at Hostinger, the subdomain's DNS
> record is created automatically. If DNS is managed elsewhere, add a `CNAME`
> `staging` → `derekcolebowen.com` (or the A record Hostinger shows). **Do not
> change any existing production DNS records.**

## 2. Get the FTP/SFTP credentials

hPanel → **Files → FTP Accounts**.

- **FTPS (default in the workflow, port 21):** use the FTP hostname, username, and
  password shown there. If you don't know the password, use **Change account
  password** to set one.
- **SFTP (optional, port 22, Business+ plans):** hPanel → **Advanced → SSH Access**
  gives the SSH/SFTP host, port, and username. Only use this if SSH is enabled on
  your plan (then switch the workflow to the SFTP step — see comments in the YAML).

## 3. Add GitHub repository secrets

GitHub → repo **Settings → Secrets and variables → Actions → New repository secret**.
Add each of these (enter the values directly in GitHub — never paste them into
Claude or commit them):

| Secret | What it is | Where to find it | Example |
| --- | --- | --- | --- |
| `HOSTINGER_HOST` | FTP/SFTP hostname | FTP Accounts (or SSH Access) | `ftp.derekcolebowen.com` or an IP |
| `HOSTINGER_USERNAME` | FTP/SFTP username | FTP Accounts (or SSH Access) | `u123456789.staging` |
| `HOSTINGER_PASSWORD` | that account's password | you set it in hPanel | — |
| `HOSTINGER_PORT` | `21` for FTPS (default) / `22` for SFTP | — | `21` |
| `HOSTINGER_STAGING_PATH` | staging document root (absolute path, or path relative to the FTP account root) | the folder from step 1 | `/domains/derekcolebowen.com/public_html/staging/` |

> Tip: FTP accounts are often chrooted to their home dir, so `HOSTINGER_STAGING_PATH`
> may be relative — e.g. `public_html/staging/` or `/staging/`. Confirm by logging in
> once with an FTP client and noting where the staging folder sits.

## 4. Run the staging deploy

1. GitHub → **Actions** → **Deploy to Hostinger (staging)** → **Run workflow** → branch `main`.
2. Watch the run: it does `npm ci` → `npm run build` → applies the staging noindex →
   uploads `dist/apps/web/` to the staging path.
3. Visit `https://staging.derekcolebowen.com` and run through the validation checklist below.

## 5. Validate on staging

- MySpace intro renders, scroll/glitch transition works, modern homepage appears
- About, Books, Blog, blog posts, Work With Me all load
- Deep links (e.g. `/blog/trucking-truth`) load directly (SPA `.htaccess` works)
- Unknown path (e.g. `/nope`) shows the branded 404
- Images load (all local `/images/...`, no `horizons-cdn` requests in DevTools Network)
- Contact actions open an email draft — nothing claims "sent"
- Mobile: bottom nav + responsive layout
- `https://staging.derekcolebowen.com/robots.txt` shows `Disallow: /`
- Response headers include `X-Robots-Tag: noindex, nofollow` (staging only)
- HTTPS padlock is valid

## Notes

- **Production is out of scope here.** A production workflow (deploying to
  `public_html`) will be added only after staging is signed off.
- The staging noindex (`robots.txt` + `X-Robots-Tag`) is injected **in CI only**;
  the committed repo keeps the production `robots.txt` (`Allow: /`), so production
  never inherits it.
- `HOSTINGER_STAGING_PATH` must point at the **staging** folder. Never set it to
  `public_html`.
