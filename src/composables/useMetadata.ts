
import { sharedData } from '@/data/shared-data';

export function useMetadata() {
  const setMetadata = (options: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    projects?: boolean;
  } = {}) => {
    
    document.title = options.title || `${sharedData.personal.name} | Portfolio`;
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = options.description || sharedData.personal.shortBio;

    
    const metaOgType = document.querySelector('meta[property="og:type"]') || createMetaTag('og:type');
    metaOgType.setAttribute('content', 'website');

    const metaOgTitle = document.querySelector('meta[property="og:title"]') || createMetaTag('og:title');
    metaOgTitle.setAttribute('content', document.title);

    const metaOgDescription = document.querySelector('meta[property="og:description"]') || createMetaTag('og:description');
    metaOgDescription.setAttribute('content', metaDescription.content);

    const metaOgUrl = document.querySelector('meta[property="og:url"]') || createMetaTag('og:url');
    metaOgUrl.setAttribute('content', options.url || window.location.href);

    const metaOgImage = document.querySelector('meta[property="og:image"]') || createMetaTag('og:image');
    metaOgImage.setAttribute('content', options.image || '/social-preview.jpg');

    // Twitter Card
    const metaTwitterCard = document.querySelector('meta[name="twitter:card"]') || createMetaTag('twitter:card', 'name');
    metaTwitterCard.setAttribute('content', 'summary_large_image');

    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = options.url || window.location.href;

    // Structured Data (Schema.org)
    if (options.projects) {
      addProjectsStructuredData();
    } else {
      addPersonStructuredData();
    }
  };

  const createMetaTag = (property: string, attr: string = 'property') => {
    const meta = document.createElement('meta');
    meta.setAttribute(attr, property);
    document.head.appendChild(meta);
    return meta;
  };

  const addPersonStructuredData = () => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": sharedData.personal.name,
      "url": window.location.href,
      "sameAs": sharedData.socialLinks.map(social => social.link),
      "jobTitle": "Web Developer",
      "description": sharedData.personal.shortBio,
      "email": sharedData.personal.email,
      "telephone": sharedData.personal.phone,
      "image": "/profile-image.jpg"
    });
    document.head.appendChild(script);
  };

  const addProjectsStructuredData = () => {
    const projects = Array.isArray(sharedData.projects) 
      ? sharedData.projects 
      : Object.values(sharedData.projects);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.name,
          "description": project.description,
          "url": project.link || window.location.href + '#projects',
          "dateCreated": project.year
        }
      }))
    });
    document.head.appendChild(script);
  };

  return { setMetadata };
}

function ensureArray(data: any) {
  return Array.isArray(data) ? data : Object.values(data);
}