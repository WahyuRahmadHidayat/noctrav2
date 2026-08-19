import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, type = 'website', image = '/lo.svg', isHome = false }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    
    const setMetaTag = (attr, key, content) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', `https://www.noctra.cc${pathname}`);
    setMetaTag('property', 'og:image', image);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    let schemaTag = document.querySelector('#schema-org');
    if (isHome) {
      if (!schemaTag) {
        schemaTag = document.createElement('script');
        schemaTag.setAttribute('id', 'schema-org');
        schemaTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaTag);
      }
      schemaTag.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NOCTRA Urban Cycling Club",
        "url": "https://www.noctra.cc",
        "logo": "https://www.noctra.cc/lo.svg",
        "description": "Urban night cycling club dedicated to those who own the night."
      });
    } else if (schemaTag) {
      schemaTag.remove();
    }
  }, [title, description, type, image, pathname, isHome]);

  return null;
}