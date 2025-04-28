'use client';

import { useEffect } from 'react';

export default function ClientWrapper() {
  useEffect(() => {
    const loadGoogleTranslate = (lang: string) => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = function () {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: lang,
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        }, 'google_translate_element');
      };
    };

    const fetchLang = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const langCode = data.languages?.split(',')[0] || 'en';
        loadGoogleTranslate(langCode);
      } catch {
        loadGoogleTranslate('en');
      }
    };

    fetchLang();
  }, []);

  return <div id="google_translate_element" className="mb-4" />;
}
