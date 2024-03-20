import i18n from 'sveltekit-i18n';

const config = {
	initLocale: 'en',
	loaders: [
		{
			locale: 'en',
			key: '',
			loader: async () => (await import('./lang/en.json')).default
		},
		{
			locale: 'es',
			key: '',
			loader: async () => (await import('./lang/es.json')).default
		}
	]
};

export const { t, loading, locales, locale, initialized, translations, loadTranslations } =
	new i18n(config);
