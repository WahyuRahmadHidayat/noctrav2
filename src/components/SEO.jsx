import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, type = 'website', image = '/og-image.jpg' }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Update Title
    document.title = `${title} | NOCTRA URBAN CYCLING`;
    
    // Helper function untuk update meta tag
    const setMetaTag = (attr, key, content) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Update Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', `${title} | NOCTRA`);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', `https://www.noctra.cc${pathname}`);
    setMetaTag('property', 'og:image', image);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
  }, [title, description, type, image, pathname]);

  return null;
}