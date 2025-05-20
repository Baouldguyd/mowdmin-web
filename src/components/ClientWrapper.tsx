'use client';

import { useEffect } from 'react';



export const fetchLang = async () => {
  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const langCode = data.languages?.split(',')[0] || 'en';
        return langCode;
      } catch {
        return 'en';
      }
    };

    fetchLanguage();
  }, []);
};


