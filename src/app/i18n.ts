import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import id from './locales/id';
import ko from './locales/ko';
import ja from './locales/ja';
import zh from './locales/zh';

// Get saved language from localStorage or default to English
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      id,
      ko,
      ja,
      zh,
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
