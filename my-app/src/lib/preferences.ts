import { derived, writable } from 'svelte/store';
import { german } from './translations';
export type Locale = 'en' | 'de';
export type Theme = 'dark' | 'light';
export const locale = writable<Locale>('en');
export const theme = writable<Theme>('dark');
export const reducedMotion = writable(false);
export const birdsEnabled = writable(true);
export const flightStyle = writable<'calm' | 'lively'>('calm');
export function translate(text: string, language: Locale) {
	return language === 'de' ? (german[text.replace(/\s+/g, ' ').trim()] ?? text) : text;
}
export const t = derived(locale, (language) => (text: string) => translate(text, language));
export const resumeFile = derived(locale, (language) =>
	language === 'de' ? 'Lebenslauf-DominikDierberger.pdf' : 'CV-DominikDierberger.pdf'
);

/** Run only on the client; server renders never mutate shared stores. */
export function initializePreferences() {
	const read = (key: string) => {
		try {
			return localStorage.getItem(key);
		} catch {
			return null;
		}
	};
	const save = (key: string, value: string) => {
		try {
			localStorage.setItem(key, value);
		} catch {
			/* Private browsing can block storage. */
		}
	};
	const savedLocale = read('portfolio-language');
	const requested = new URLSearchParams(location.search).get('lang');
	locale.set(
		requested === 'de' || requested === 'en'
			? requested
			: savedLocale === 'de' || savedLocale === 'en'
				? savedLocale
				: navigator.language.toLowerCase().startsWith('de')
					? 'de'
					: 'en'
	);
	const savedTheme = read('portfolio-theme');
	theme.set(
		savedTheme === 'dark' || savedTheme === 'light'
			? savedTheme
			: matchMedia('(prefers-color-scheme: light)').matches
				? 'light'
				: 'dark'
	);
	birdsEnabled.set(read('portfolio-birds') !== 'off');
	const motion = matchMedia('(prefers-reduced-motion: reduce)');
	const updateMotion = () => reducedMotion.set(motion.matches);
	updateMotion();
	motion.addEventListener('change', updateMotion);
	const stops = [
		locale.subscribe((value) => {
			document.documentElement.lang = value;
			save('portfolio-language', value);
		}),
		theme.subscribe((value) => {
			document.documentElement.dataset.theme = value;
			save('portfolio-theme', value);
		}),
		birdsEnabled.subscribe((value) => save('portfolio-birds', value ? 'on' : 'off'))
	];
	return () => {
		stops.forEach((stop) => stop());
		motion.removeEventListener('change', updateMotion);
	};
}
