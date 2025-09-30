<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Connect from '$lib/components/Connect.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<main class="min-h-screen bg-deepblue font-sans text-white overflow-x-hidden">
	<Navbar />
	<Hero />
	<About />
	<Skills />
	<Education />
	<Experience />
	<Projects />
	<Connect />
	<Footer />
</main>
<style>
  :global(html, body) {
    /* Prevent side spill and show consistent bg behind rubber-banding */
    overflow-x: hidden;
    background-color: #0b1221; /* matches bg-deepblue */
  }

  /* Reduce iOS top/bottom rubber-band from revealing white */
  :global(html), :global(body) {
    overscroll-behavior-y: none;
  }
</style>
