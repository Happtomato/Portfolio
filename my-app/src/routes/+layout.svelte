<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { initializePreferences, theme } from '$lib/preferences';
	onMount(initializePreferences);
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content={$theme === 'dark' ? '#07192f' : '#f6f4ef'} />
</svelte:head>

{@render children?.()}
