import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enMessages from './i18n/messages/en.json';
import ptMessages from './i18n/messages/pt.json';
import idMessages from './i18n/messages/id.json';
import tlMessages from './i18n/messages/tl.json';

const resources = {
    en: { translation: enMessages.default || enMessages },
    pt: { translation: ptMessages.default || ptMessages },
    id: { translation: idMessages.default || idMessages },
    tl: { translation: tlMessages.default || tlMessages }
};

console.log("enMessages imported as:", enMessages);

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
