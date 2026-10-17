<script lang="ts">
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import { theme, birdsEnabled, reducedMotion, flightStyle, t } from '$lib/preferences';
	import type { BirdsEffect } from 'vanta/dist/vanta.birds.min.js';
	let host: HTMLDivElement;
	let failed = false;
	let loading = false;
	onMount(() => {
		let disposed = false;
		let generation = 0;
		let effect: BirdsEffect | undefined;
		let inView = true;
		let running = false;
		function visibility() {
			const shouldRun = inView && !document.hidden;
			if (!effect || shouldRun === running) return;
			running = shouldRun;
			if (running) effect.animationLoop();
			else cancelAnimationFrame(effect.req);
		}
		const observer = new IntersectionObserver(([entry]) => {
			inView = entry.isIntersecting;
			visibility();
		});
		observer.observe(host);
		document.addEventListener('visibilitychange', visibility);
		const settings = derived([theme, birdsEnabled, reducedMotion], (values) => values);
		const unsubscribe = settings.subscribe(async ([mode, enabled, reduced]) => {
			const current = ++generation;
			if (effect) {
				effect.destroy();
				effect = undefined;
			}
			running = false;
			failed = false;
			loading = false;
			if (!enabled || reduced) return;
			loading = true;
			try {
				const [THREE, { default: BIRDS }] = await Promise.all([
					import('three-vanta'),
					import('vanta/dist/vanta.birds.min.js')
				]);
				if (disposed || current !== generation) return;
				const pixelsPerCssPixel = Math.min(0.6, 1400 / Math.max(host.clientWidth, 1));
				const renderScale = (window.devicePixelRatio || 1) / pixelsPerCssPixel;
				effect = BIRDS({
					el: host,
					THREE,
					mouseControls: true,
					touchControls: false,
					gyroControls: false,
					backgroundAlpha: 0,
					backgroundColor: mode === 'dark' ? 0x07192f : 0xf6f4ef,
					color1: mode === 'dark' ? 0xff7bb5 : 0xa63371,
					color2: mode === 'dark' ? 0xffc477 : 0xc9652c,
					colorMode: 'varianceGradient',
					quantity: matchMedia('(max-width: 760px)').matches ? 2 : 3,
					birdSize: 1.1,
					wingSpan: 24,
					speedLimit: $flightStyle === 'calm' ? 3 : 6,
					separation: 36,
					alignment: 30,
					cohesion: 26,
					scale: renderScale,
					scaleMobile: renderScale
				});
				if (!host.querySelector('canvas')) {
					effect.destroy();
					effect = undefined;
					failed = true;
				}
				running = !!effect;
				visibility();
			} catch {
				failed = true;
			} finally {
				if (!disposed && current === generation) loading = false;
			}
		});
		const unsubscribeStyle = flightStyle.subscribe((style) =>
			effect?.setOptions({
				speedLimit: style === 'calm' ? 3 : 6,
				separation: style === 'calm' ? 36 : 18
			})
		);
		return () => {
			disposed = true;
			generation++;
			unsubscribe();
			unsubscribeStyle();
			observer.disconnect();
			document.removeEventListener('visibilitychange', visibility);
			effect?.destroy();
		};
	});
</script>

<div class="birds-background" bind:this={host} aria-hidden="true"></div>
{#if failed || loading}<p class="birds-status" role="status">
		{$t(failed ? 'The flock is unavailable on this device.' : 'Loading the flock…')}
	</p>{/if}
