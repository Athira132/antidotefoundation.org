import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
  breadcrumbs?: Array<{ name: string; path: string }>;
  noIndex?: boolean;
}

const BASE_URL = 'https://antidotefoundation.org';
const DEFAULT_IMAGE = `${BASE_URL}/logo-new.png`;
const DEFAULT_KEYWORDS =
  'Drug abuse prevention in India, Substance abuse awareness India, Drug awareness NGO in India, Drug-free India initiative, Youth empowerment NGO India, Drug addiction awareness, Substance abuse prevention NGO, Anti-drug awareness programmes, Drug prevention for students, Addiction awareness campaigns, Drug awareness NGO in Bengaluru, Drug prevention NGO in Bangalore, Substance abuse awareness in Karnataka, Drug awareness programmes in Kerala';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  keywords = DEFAULT_KEYWORDS,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema,
  breadcrumbs,
  noIndex = false
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create a meta tag
    const setMeta = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', 'Antidote Foundation of India');
    setMeta(
      'name',
      'robots',
      noIndex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // 3. Canonical URL
    const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`.replace(/\/+$/, '') || `${BASE_URL}/`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph Tags
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', 'Antidote Foundation of India');
    setMeta('property', 'og:locale', 'en_IN');
    setMeta('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

    // 6. Structured Data (JSON-LD)
    const baseOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': ['NGO', 'Organization'],
      '@id': `${BASE_URL}/#organization`,
      name: 'Antidote Foundation of India',
      alternateName: ['AFOI', 'Antidote Foundation'],
      url: `${BASE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo-new.png`,
        caption: 'Antidote Foundation of India Official Logo'
      },
      image: `${BASE_URL}/logo-new.png`,
      description:
        'Antidote Foundation of India (AFOI) is a registered non-profit organization dedicated to drug abuse prevention, youth empowerment, substance abuse awareness, addiction counselling, and community safeguarding across India.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No. 38, Lakshman Layout, J. P. Nagar',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560078',
        addressCountry: 'IN'
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-77779-27742',
          contactType: 'emergency helpline',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi', 'Kannada', 'Malayalam']
        }
      ],
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'State', name: 'Karnataka' },
        { '@type': 'State', name: 'Kerala' }
      ],
      founder: {
        '@type': 'Person',
        name: 'P.A. Issac',
        jobTitle: 'Founder/Chairman'
      },
      sameAs: [
        'https://www.instagram.com/antidotefoundation',
        'https://www.youtube.com/@antidotefoundation',
        'https://www.facebook.com/antidotefoundation'
      ]
    };

    const baseWebsiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: 'Antidote Foundation of India',
      description: 'Drug Abuse Prevention in India | Youth Empowerment and Substance Abuse Awareness NGO',
      publisher: {
        '@id': `${BASE_URL}/#organization`
      },
      inLanguage: 'en-IN'
    };

    // Breadcrumbs Schema
    let breadcrumbSchema = null;
    if (breadcrumbs && breadcrumbs.length > 0) {
      breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/`
          },
          ...breadcrumbs.map((b, idx) => ({
            '@type': 'ListItem',
            position: idx + 2,
            name: b.name,
            item: `${BASE_URL}${b.path.startsWith('/') ? b.path : `/${b.path}`}`
          }))
        ]
      };
    }

    const schemasToInject = [
      baseOrganizationSchema,
      baseWebsiteSchema,
      ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ...(Array.isArray(schema) ? schema : schema ? [schema] : [])
    ];

    let scriptElement = document.getElementById('seo-structured-data');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.setAttribute('id', 'seo-structured-data');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schemasToInject);
  }, [title, description, canonicalPath, keywords, ogType, ogImage, schema, breadcrumbs]);

  return null;
};
