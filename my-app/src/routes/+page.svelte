<script lang="ts">
	import { t } from '$lib/preferences';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Connect from '$lib/components/Connect.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>{$t('Dominik Dierberger — Software Developer · Backend & AI')}</title>
	<meta
		name="description"
		content={$t(
			'Software developer focused on Python, APIs and data-driven applications. Explore Dominik Dierberger’s projects, experience at FutureLog and AI & Machine Learning studies at HSLU.'
		)}
	/>
	<meta
		property="og:title"
		content={$t('Dominik Dierberger — Software Developer · Backend & AI')}
	/>
	<meta
		property="og:description"
		content={$t(
			'Software developer focused on Python, APIs and data-driven applications. Explore Dominik Dierberger’s projects, experience at FutureLog and AI & Machine Learning studies at HSLU.'
		)}
	/>
</svelte:head>
<Navbar />
<main id="main" tabindex="-1">
	<Hero /><Projects /><About /><Skills /><Experience /><Education /><Connect />
</main>
<Footer />
