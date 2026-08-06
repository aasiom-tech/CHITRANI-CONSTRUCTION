import React, { useEffect } from 'react';
import { companyConfig } from '../../config/companyConfig';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "Chitrani Construction delivers structural civil contracting and Putzmeister M42-5 concrete boom placer rental for complex projects across Maharashtra.",
  canonical,
  jsonLd,
  noindex = false
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 1b. Update Meta Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noindex ? 'noindex, follow' : 'index, follow');

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // 4. Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // 5. Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    } else if (linkCanonical) {
      linkCanonical.remove();
    }

    // 6. Inject JSON-LD
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (scriptTag) {
      scriptTag.remove();
    }

    // Default Organization JSON-LD + Page specific JSON-LD
    const defaultOrgLd = {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "name": companyConfig.name,
      "legalName": companyConfig.legalName,
      "email": companyConfig.email,
      "telephone": companyConfig.phone,
      "taxID": companyConfig.gstin,
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Shop No. 13, Vijay Nagar Society, Sahar Road, Near D Mart, Andheri East",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400069",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 15, Gat No. 146, Nehru Nagar, Mahabal Road, Ramanand Nagar",
          "addressLocality": "Jalgaon",
          "addressRegion": "Maharashtra",
          "postalCode": "425001",
          "addressCountry": "IN"
        }
      ]
    };

    const combinedLd = jsonLd ? [defaultOrgLd, jsonLd] : [defaultOrgLd];

    scriptTag = document.createElement('script');
    scriptTag.id = scriptId;
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(combinedLd);
    document.head.appendChild(scriptTag);

    return () => {
      // Clean up injected script if unmounting
      const tag = document.getElementById(scriptId);
      if (tag) tag.remove();
    };
  }, [title, description, canonical, jsonLd]);

  return null;
};
