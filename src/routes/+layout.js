import { loadTranslations } from '$lib/translations';

export const load = async ({ url, data }) => {
	const { pathname } = url;
	const { i18n, user } = data;
	const { locale } = i18n;

	await loadTranslations(locale, pathname);

	return { locale: locale, route: pathname, user: user };
};
