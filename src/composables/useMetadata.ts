import { sharedData } from '@/data/shared-data';


type MetaElement = HTMLMetaElement & {
  content: string;
  name?: string;
  property?: string;
};

type LinkElement = HTMLLinkElement & {
  href: string;
  rel: string;
};

export function useMetadata() {
  const setMetadata = (options: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    projects?: boolean;
  } = {}) => {
   
    document.title = options.title || `${sharedData.personal.name} | Portfolio`;
    

    let metaDescription = document.querySelector('meta[name="description"]') as MetaElement | null;
    if (!metaDescription) {
      metaDescription = document.createElement('meta') as MetaElement;
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = options.description || sharedData.personal.shortBio;


    const getOrCreateMeta = (property: string, attr: 'name' | 'property' = 'property'): MetaElement => {
      const selector = `meta[${attr}="${property}"]`;
      let meta = document.querySelector(selector) as MetaElement | null;
      
      if (!meta) {
        meta = document.createElement('meta') as MetaElement;
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      
      return meta;
    };

 
    const metaOgType = getOrCreateMeta('og:type');
    metaOgType.content = 'website';

    const metaOgTitle = getOrCreateMeta('og:title');
    metaOgTitle.content = document.title;

    const metaOgDescription = getOrCreateMeta('og:description');
    metaOgDescription.content = metaDescription.content;

    const metaOgUrl = getOrCreateMeta('og:url');
    metaOgUrl.content = options.url || window.location.href;

    const metaOgImage = getOrCreateMeta('og:image');
    metaOgImage.content = options.image || '/preview.jpg';


    const metaTwitterCard = getOrCreateMeta('twitter:card', 'name');
    metaTwitterCard.content = 'summary_large_image';

    let linkCanonical = document.querySelector('link[rel="canonical"]') as LinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link') as LinkElement;
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = options.url || window.location.href;


    if (options.projects) {
      addProjectsStructuredData();
    } else {
      addPersonStructuredData();
    }
  };

  const addPersonStructuredData = () => {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

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
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

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