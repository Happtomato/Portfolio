<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Connect from '$lib/components/Connect.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="min-h-screen bg-deepblue font-sans text-white">
	<Hero />
	<Header />
	<About />
	<Skills />
	<Education />
	<Experience />
	<Projects />
	<Connect />
	<Footer />
</main>
