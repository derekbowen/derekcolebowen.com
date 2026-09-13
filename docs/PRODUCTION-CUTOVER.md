# Production cutover — taking the site over from Hostinger Horizons

Goal: **GitHub becomes the only thing that publishes derekcolebowen.com.**
Hostinger stays the host. Horizons drops out of the loop.

Everything on the code side is already done and committed. What's left needs your
Hostinger login, so it can't be automated from here.

---

## The minimum you have to do

### One-time setup (~10 min)

1. **hPanel → Files → File Manager.** Open the document root for
   `derekcolebowen.com` and note which case you're in:
   - **Case A** — you see `index.html`, `assets/`, `.htaccess` → standard
     `public_html`. Note its full path. *(Easy path.)*
   - **Case B** — empty / locked / shown as a Horizons-managed site → the domain
     needs to be attached to standard Hostinger web hosting first. Tell me and
     I'll write those steps.

2. **hPanel → Files → FTP Accounts.** Note the **hostname** and **username**; set
   a **password** if you don't know it.

3. **GitHub → repo → Settings → Secrets and variables → Actions.** Add:

   | Secret | Value |
   | --- | --- |
   | `HOSTINGER_HOST` | FTP hostname from step 2 |
   | `HOSTINGER_USERNAME` | FTP username from step 2 |
   | `HOSTINGER_PASSWORD` | that password |
   | `HOSTINGER_PORT` | `21` |
   | `HOSTINGER_STAGING_PATH` | staging folder (see `STAGING-DEPLOY.md`) |
   | `HOSTINGER_PROD_PATH` | the production docroot path from step 1 |

   Enter these directly in GitHub. Never paste them into chat or commit them.

### Before the cutover

4. **Back up production.** File Manager → select the docroot contents →
   **Compress** → download the archive. This is your rollback.

5. **Stop Horizons publishing.** Stop editing the site in the Horizons builder
   (and disconnect its GitHub sync if it has one), so two systems aren't writing
   to the same folder. **Do not delete the Horizons project** — it stays as a
   fallback.

### The cutover

6. *(Recommended)* **Actions → "Deploy to Hostinger (staging)" → Run workflow.**
   Check `staging.derekcolebowen.com` looks right.

7. **Dry run first (free, uploads nothing).**
   **Actions → "Deploy production" → Run workflow**, with:
   - confirm: `deploy-production`
   - dry_run: **true**

   This builds and runs all four pre-flight guards (no staging noindex, no
   Horizons leftovers, title is "Derek Bowen", output non-empty) without
   touching the server. If it goes green, the real run will too.

8. **The real cutover.** Same workflow, with:
   - confirm: `deploy-production`
   - dry_run: **false**
   - clean_slate: **true** *(first cutover only — wipes the old Horizons files
     out of the docroot so nothing stale is left behind. Leave it false on every
     later deploy.)*

   It refuses to run from any branch except `main`, and refuses unless the
   confirm string matches exactly.

### Verify (1 min)

Load `https://derekcolebowen.com` and confirm:
- Title is **"Derek Bowen"** (not "Hostinger Horizons")
- Response header `x-powered-by: Hostinger Horizons` is **gone**
- A deep link works (`/blog/trucking-truth`) and an unknown path shows the 404
- Images load from `/images/…` (no `horizons-cdn` requests)

---

## Rollback

Re-upload the backup archive from step 4 to the docroot. Worst case, the Horizons
project still exists and can republish.

## After cutover

The pipeline is: **Claude Code → GitHub `main` → Actions → Hostinger → derekcolebowen.com.**
To change the site: edit, commit, push, then run the production workflow.

DNS is never touched in Case A — the domain already points at Hostinger.
