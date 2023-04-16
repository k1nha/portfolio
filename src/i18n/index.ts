import i18n from "i18next";
import { initReactI18next } from 'react-i18next'
import PTBR from './locales/pt/pt-br.json'
import EN from './locales/en/en-us.json'


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        ...EN
      },
      pt: {
        ...PTBR
      }
    },
    lng: navigator.language,
  })

export default i18n;
