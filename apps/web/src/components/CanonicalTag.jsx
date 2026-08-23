import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://derekcolebowen.com';

// Emits a production canonical + og:url for the current route. Hardcoded to the
// production domain on purpose, so staging deploys never emit staging URLs as
// canonical — staging pages point at their production equivalents.
const CanonicalTag = () => {
  const { pathname } = useLocation();
  const path = pathname === '/' ? '' : pathname.replace(/\/+$/, '');
  const href = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <link rel="canonical" href={href} />
      <meta property="og:url" content={href} />
    </Helmet>
  );
};

export default CanonicalTag;
