<script lang="ts">
	import { locale, theme, t } from '$lib/preferences';
</script>

<div class="preferences">
	<div class="language-switch" role="group" aria-label={$t('Language')}>
		<button
			type="button"
			lang="de"
			aria-label="Deutsch"
			aria-pressed={$locale === 'de'}
			onclick={() => locale.set('de')}>DE</button
		>
		<button
			type="button"
			lang="en"
			aria-label="English"
			aria-pressed={$locale === 'en'}
			onclick={() => locale.set('en')}>EN</button
		>
	</div>
	<button
		type="button"
		class="theme-switch"
		aria-label={$t($theme === 'dark' ? 'Light mode' : 'Dark mode')}
		title={$t($theme === 'dark' ? 'Light mode' : 'Dark mode')}
		onclick={() => theme.set($theme === 'dark' ? 'light' : 'dark')}
	>
		<span aria-hidden="true">{$theme === 'dark' ? '☼' : '☾'}</span>
	</button>
</div>
