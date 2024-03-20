import { browser } from '$app/environment';
import { loadTranslations } from '$lib/translations';

export const load = async ({ url }) => {
	const { pathname } = url;
	const initLocale = getInitialLocale();

	await loadTranslations(initLocale, pathname);

	return { locale: initLocale, route: pathname };
};

function getInitialLocale() {
	if (browser) {
		try {
			return window.navigator.language.split('-')[0];
		} catch (e) {
			return 'es';
		}
	}

	return 'es';
}
