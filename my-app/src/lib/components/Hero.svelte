<script lang="ts">
	import Birds from './Birds.svelte';
	import BuildExplorer from './BuildExplorer.svelte';
	import { t, birdsEnabled, reducedMotion, flightStyle } from '$lib/preferences';
</script>

<section id="home" class="hero">
	<Birds />
	<div class="hero-glow" aria-hidden="true"></div>
	<div class="shell hero-layout">
		<div class="hero-copy">
			<p class="eyebrow entrance">{$t('BACKEND DEVELOPMENT · AI & MACHINE LEARNING')}</p>
			<h1 class="entrance">
				{$t('Hi, I’m Dominik.')}<br /><span class="gradient-text"
					>{$t('I turn ideas into')}<br />{$t('working software.')}</span
				>
			</h1>
			<p class="hero-description entrance">
				{$t(
					'From Python APIs to data-driven applications, I enjoy building the systems behind a useful product. Software developer with experience at FutureLog, now studying AI & Machine Learning at HSLU.'
				)}
			</p>
			<div class="button-row entrance">
				<a class="button primary" href="#projects">{$t('Explore my work')} ↗</a><a
					class="button secondary"
					href="#contact">{$t('Let’s talk')} ↗</a
				>
			</div>
			<div class="hero-note entrance">
				<span class="small-dot"></span>{$t('Python at the core. Curiosity behind it all.')}
			</div>
		</div>
		<BuildExplorer />
	</div>
	<div class="shell flock-toolbar">
		<div>
			<strong>{$t('Play with the flock')}</strong>
			<p>
				{$t(
					$reducedMotion
						? 'Motion is reduced by your device settings.'
						: 'Move your pointer. The flock reacts to you.'
				)}
			</p>
		</div>
		<div class="flock-controls">
			<button
				type="button"
				class="flock-toggle"
				disabled={$reducedMotion}
				aria-pressed={$birdsEnabled && !$reducedMotion}
				onclick={() => birdsEnabled.update((value) => !value)}
				><span aria-hidden="true">{$birdsEnabled && !$reducedMotion ? '◉' : '○'}</span>
				{$t($birdsEnabled && !$reducedMotion ? 'Birds on' : 'Birds off')}</button
			>
			<div class="flight-switch" role="group" aria-label={$t('Flight style')}>
				<button
					type="button"
					disabled={!$birdsEnabled || $reducedMotion}
					aria-pressed={$flightStyle === 'calm'}
					onclick={() => flightStyle.set('calm')}>{$t('Calm')}</button
				><button
					type="button"
					disabled={!$birdsEnabled || $reducedMotion}
					aria-pressed={$flightStyle === 'lively'}
					onclick={() => flightStyle.set('lively')}>{$t('Lively')}</button
				>
			</div>
		</div>
	</div>
	<div class="shell hero-bottom">
		<span>DOMINIK DIERBERGER / PORTFOLIO</span><a href="#projects"
			>{$t('SCROLL TO EXPLORE')} <span aria-hidden="true">↓</span></a
		>
	</div>
</section>
