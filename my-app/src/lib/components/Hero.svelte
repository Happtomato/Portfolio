<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	let vantaRef: HTMLElement;
	let vantaEffect: any;

	// tiny helper to load a script from CDN when needed
	const loadScript = (src: string) =>
		new Promise<void>((resolve, reject) => {
			const s = document.createElement('script');
			s.src = src;
			s.async = true;
			s.onload = () => resolve();
			s.onerror = (e) => reject(e);
			document.head.appendChild(s);
		});

	onMount(async () => {
		if (import.meta.env.SSR) return;

		await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
		await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js');

		// @ts-ignore
		const BIRDS = (window as any).VANTA?.BIRDS;
		// @ts-ignore
		const THREE = (window as any).THREE;

		console.log('CDN BIRDS:', BIRDS);
		console.log('CDN THREE:', THREE);

		if (!BIRDS || !THREE) {
			console.error('Vanta not loaded from CDN');
			return;
		}

		vantaEffect = BIRDS({
			el: vantaRef,
			THREE,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			// 👇 colors from configurator
			backgroundColor: 0x7192f, // dark indigo
			color1: 0xff0000, // bright blue
			color2: 0xd1ff, // indigo
			colorMode: 'varianceGradient',
			birdSize: 1.4,
			wingSpan: 32.0,
			speedLimit: 5,
			separation: 20,
			alignment: 20,
			cohesion: 20
		});
		console.log('CDN Vanta initialized:', vantaEffect);
	});

	onDestroy(() => {
		if (vantaEffect) vantaEffect.destroy();
	});
</script>

<section bind:this={vantaRef} class="relative h-screen w-screen overflow-hidden text-white">
	<!-- optional gradient overlay to keep your theme -->
	<!-- <div class="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 to-blue-700/50"></div> -->

	<!-- your hero content -->
	<div
		class="relative z-10 flex h-full flex-col items-start justify-center pl-12 text-left md:pl-24"
	>
		<h1 class="animate-fadeIn text-5xl font-extrabold md:text-6xl">
			Hi, I’m
			<span
				class="bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-transparent"
			>
				Dominik Dierberger
			</span>
		</h1>
		<p
			class="animate-fadeIn mt-4 bg-gradient-to-r from-accentOrange to-accentYellow bg-clip-text text-xl text-transparent opacity-90 delay-200"
		>
			Backend developer • Python • Java • C#
		</p>
		<a
			href="#projects"
			class="mt-8 inline-flex items-center gap-2 rounded-xl bg-accentPink px-6 py-3 font-medium text-deepblue shadow transition hover:bg-accentOrange"
		>
			View Projects
		</a>
	</div>
</section>

<style>
</style>
