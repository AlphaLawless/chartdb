import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { ar, arMetadata } from './locales/ar';
import { bn, bnMetadata } from './locales/bn';
import { de, deMetadata } from './locales/de';
import { en, enMetadata } from './locales/en';
import { es, esMetadata } from './locales/es';
import { fr, frMetadata } from './locales/fr';
import { gu, guMetadata } from './locales/gu';
import { hi, hiMetadata } from './locales/hi';
import { hr, hrMetadata } from './locales/hr';
import { id_ID, id_IDMetadata } from './locales/id_ID';
import { ja, jaMetadata } from './locales/ja';
import { ko_KR, ko_KRMetadata } from './locales/ko_KR';
import { mr, mrMetadata } from './locales/mr';
import { ne, neMetadata } from './locales/ne';
import { pt_BR, pt_BRMetadata } from './locales/pt_BR';
import { ru, ruMetadata } from './locales/ru';
import { te, teMetadata } from './locales/te';
import { tr, trMetadata } from './locales/tr';
import { uk, ukMetadata } from './locales/uk';
import { vi, viMetadata } from './locales/vi';
import { zh_CN, zh_CNMetadata } from './locales/zh_CN';
import { zh_TW, zh_TWMetadata } from './locales/zh_TW';
import type { LanguageMetadata } from './types';

export const languages: LanguageMetadata[] = [
  enMetadata,
  frMetadata,
  deMetadata,
  esMetadata,
  ukMetadata,
  ruMetadata,
  trMetadata,
  hrMetadata,
  pt_BRMetadata,
  hiMetadata,
  jaMetadata,
  ko_KRMetadata,
  zh_CNMetadata,
  zh_TWMetadata,
  neMetadata,
  mrMetadata,
  id_IDMetadata,
  teMetadata,
  bnMetadata,
  guMetadata,
  viMetadata,
  arMetadata,
];

const resources = {
  en,
  es,
  fr,
  de,
  hi,
  ja,
  ko_KR,
  pt_BR,
  uk,
  ru,
  zh_CN,
  zh_TW,
  ne,
  mr,
  tr,
  id_ID,
  te,
  bn,
  gu,
  vi,
  ar,
  hr,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: enMetadata.code,
    debug: false,
  });

export { i18n };
