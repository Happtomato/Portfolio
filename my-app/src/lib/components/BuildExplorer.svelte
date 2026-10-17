<script lang="ts">
	import { t } from '$lib/preferences';
	let active = 0;
	const layers = [
		{
			label: 'Backend',
			title: 'Build the foundation.',
			text: 'I build application logic and APIs with Python, Flask and FastAPI, backed by relational databases.',
			stack: ['Python', 'FastAPI', 'SQL'],
			icon: '{ }'
		},
		{
			label: 'Data',
			title: 'Find the possibilities.',
			text: 'I collect, explore and present data in projects like the Steam dashboard and the Swiss climate story.',
			stack: ['Pandas', 'Streamlit', 'SvelteKit'],
			icon: '▥'
		},
		{
			label: 'Delivery',
			title: 'Bring it to life.',
			text: 'I package applications with Docker and work with Azure and self-managed Linux deployments.',
			stack: ['Docker', 'Azure', 'Linux'],
			icon: '↗'
		}
	];
</script>

<div class="build-explorer entrance">
	<div class="explorer-top">
		<span class="eyebrow">{$t('EXPLORE HOW I BUILD')}</span><span
			class="explorer-dots"
			aria-hidden="true">● ● ●</span
		>
	</div>
	<p class="explorer-hint">{$t('Pick a layer. See what connects.')}</p>
	<div class="layer-switch" role="group" aria-label={$t('EXPLORE HOW I BUILD')}>
		{#each layers as layer, i}<button
				type="button"
				aria-pressed={active === i}
				onclick={() => (active = i)}
				><span class="layer-index">0{i + 1}</span>{$t(layer.label)}</button
			>{/each}
	</div>
	<div
		class="explorer-stage"
		aria-hidden="true"
		class:data-layer={active === 1}
		class:delivery-layer={active === 2}
	>
		<span class="stage-ring"></span><span class="stage-ring second"></span><span
			class="stage-node one">API</span
		><span class="stage-node two">SQL</span><span class="stage-node three">UI</span><span
			class="stage-core">{layers[active].icon}</span
		>
	</div>
	<div class="explorer-content" aria-live="polite" aria-atomic="true">
		<h3>{$t(layers[active].title)}</h3>
		<p>{$t(layers[active].text)}</p>
		<ul class="tags">
			{#each layers[active].stack as item}<li>{item}</li>{/each}
		</ul>
	</div>
	<a class="explorer-link" href="#projects"
		>{$t('See it in my projects')} <span aria-hidden="true">↗</span></a
	>
</div>
