import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const options = {
    order: ['navigator', 'localStorage'],
    caches: ['localStorage'],
    fallbackLng: "de",
    debug: true,
    load: 'currentOnly',
    resources: {
        en: {
            translation: {
                "card": "Add to cart",
                "search": "Search",
                "cat": "Categories",
                "error": "Error: Try again.",
            }
        },
        de:{
            translation: {
                "card": "In den Warenkorb legen",
                "search": "Suche",
                "cat": "Kategorien",
                "error": "Fehler, versuche es erneut.",
            }
        }
    },
    interpolation: {
        escapeValue: false
    }
};

i18n
    .use(initReactI18next)
    .init(options);


export default i18n;
