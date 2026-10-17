<script lang="ts">
	import Preferences from '$lib/components/Preferences.svelte';
	import { t, locale, resumeFile } from '$lib/preferences';
</script>

<svelte:head
	><title>{$locale === 'de' ? 'Lebenslauf' : 'CV'} — Dominik Dierberger</title><meta
		name="description"
		content={`${$t('CV')} — Dominik Dierberger`}
	/></svelte:head
>
<div class="resume-page">
	<header class="resume-header shell">
		<a class="text-link" href="/">← {$t('Back to portfolio')}</a><Preferences />
	</header>
	<main id="main" class="shell resume-main">
		<p class="eyebrow">DOMINIK DIERBERGER / {$t('CV').toUpperCase()}</p>
		<div class="section-heading">
			<div>
				<h1>{$t('CV')}</h1>
				<p>{$t('The PDF matches your selected language.')}</p>
			</div>
			<a class="button primary" href={`/${$resumeFile}`} download={$resumeFile}
				>{$t('Download CV')} ↓</a
			>
		</div>
		<p class="pdf-fallback">
			{$t('If the preview is unavailable, open or download the PDF.')}
			<a href={`/${$resumeFile}`} target="_blank" rel="noopener noreferrer">{$t('Open PDF')} ↗</a>
		</p>
		{#key $resumeFile}<object
				class="resume-preview"
				data={`/${$resumeFile}`}
				type="application/pdf"
				aria-label={$t($locale === 'de' ? 'German CV' : 'English CV')}
				><p><a href={`/${$resumeFile}`} download={$resumeFile}>{$t('Download CV')}</a></p></object
			>{/key}
	</main>
</div>
