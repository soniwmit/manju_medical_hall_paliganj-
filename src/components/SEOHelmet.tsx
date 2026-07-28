import { useEffect } from 'react';
import { PageView } from '../types';
import { BUSINESS_INFO, FAQS } from '../data/pharmacyData';

interface SEOHelmetProps {
  currentPage: PageView;
  title?: string;
  description?: string;
}

export default function SEOHelmet({ currentPage, title, description }: SEOHelmetProps) {
  useEffect(() => {
    // 1. Title
    const siteTitle = title || `${BUSINESS_INFO.name} | Trusted Pharmacy in Paliganj Bihar`;
    document.title = siteTitle;

    // 2. Meta Description
    const metaDesc = description || `${BUSINESS_INFO.tagline}. Located at ${BUSINESS_INFO.address}, ${BUSINESS_INFO.location}. Phone: ${BUSINESS_INFO.phone}. Genuine medicines, baby care, surgical supplies, and WhatsApp order.`;
    
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', metaDesc);

    // 3. Keywords
    const keywords = "Manju Medical Hall, Pharmacy in Paliganj, Medical store Paliganj, Indra Nagar More medical shop, Paliganj chemist, genuine medicines Bihar 801110, WhatsApp medicine order Paliganj, 06207148771, baby care products Paliganj, surgical supplies Paliganj, glucometer BP monitor Paliganj";
    let metaKeywordsTag = document.querySelector('meta[name="keywords"]');
    if (!metaKeywordsTag) {
      metaKeywordsTag = document.createElement('meta');
      metaKeywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywordsTag);
    }
    metaKeywordsTag.setAttribute('content', keywords);

    // 4. Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: metaDesc },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: BUSINESS_INFO.name },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: siteTitle },
      { property: 'twitter:description', content: metaDesc }
    ];

    ogTags.forEach(tagData => {
      let tag = document.querySelector(`meta[property="${tagData.property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', tagData.property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', tagData.content);
    });

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // 6. LocalBusiness & Pharmacy JSON-LD Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "@id": `${window.location.origin}/#pharmacy`,
      "name": BUSINESS_INFO.name,
      "alternateName": "Manju Medical Store Paliganj",
      "description": BUSINESS_INFO.tagline,
      "url": window.location.origin,
      "telephone": BUSINESS_INFO.phone,
      "priceRange": "₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address,
        "addressLocality": BUSINESS_INFO.city,
        "addressRegion": BUSINESS_INFO.state,
        "postalCode": BUSINESS_INFO.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.3508,
        "longitude": 84.8105
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "21:30"
        }
      ],
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Mobile Wallet"],
      "areaServed": ["Paliganj", "Bikram", "Dulhin Bazar", "Kinjar", "Chandos", "Bihar 801110"]
    };

    // 7. FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // 8. Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        ...(currentPage !== 'home' ? [{
          "@type": "ListItem",
          "position": 2,
          "name": currentPage.charAt(0).toUpperCase() + currentPage.slice(1),
          "item": `${window.location.origin}/${currentPage}`
        }] : [])
      ]
    };

    // Inject Scripts
    const scriptId = 'jsonld-schemas';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify([localBusinessSchema, faqSchema, breadcrumbSchema]);

  }, [currentPage, title, description]);

  return null;
}
