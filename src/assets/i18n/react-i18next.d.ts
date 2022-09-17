import 'react-i18next';
import ru from './locales/ru.json';
import en from './locales/en.json';


declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'ns1';
        resources: {
            ru: typeof ru,
            en: typeof en,
        };
    }
}