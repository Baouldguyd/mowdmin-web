// utils/fetchLang.ts
export const fetchLang = async (): Promise<string> => {
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      const langCode = data.languages?.split(',')[0] || 'en';
      return langCode;
    } catch {
      return 'en';
    }
  };
  