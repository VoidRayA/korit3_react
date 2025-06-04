import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './en.json';
import de from './de.json';
import kr from './kr.json';
import jp from './jp.json';
import ch from './ch.json';
import tw from './tw.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    de: {translation: de},
    kr: {translation: kr},
    jp: {translation: jp},
    ch: {translation: ch},
    tw: {translation: tw},
  },
  lng: 'kr',
  fallbacklng: 'kr',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;
