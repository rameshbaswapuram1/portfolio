import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load JSON from public/locales
  .use(LanguageDetector) // Detect selected/browser language
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "de", "ja"],
    fallbackLng: "en", // Default language
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"], // Priority
      caches: ["localStorage"], // Save user choice
    },
    react: {
      useSuspense: false, // Avoid UI block during loading
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
