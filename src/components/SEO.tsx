import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
}

export function SEO({
  title = 'Bamitale Hospital | 24/7 Healthcare in Sagamu, Ogun State',
  description = 'Bamitale Hospital provides quality 24-hour medical care at 3 Folarin St, Makun, Sagamu. Emergency, maternity, general practice & more. Call 0707 191 9154.',
  canonical = 'https://bamitale-hospital-website-apza.vercel.app/',
  ogImage = '/og-image.jpg',
  ogImageAlt = 'Bamitale Hospital - Private Hospital in Sagamu, Ogun State',
  noindex = false,
}: SEOProps) {
  const ogImageUrl = `https://bamitale-hospital-website-apza.vercel.app${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
    </Helmet>
  );
}