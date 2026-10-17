<script lang="ts">
	import { onMount } from 'svelte';
	import Preferences from './Preferences.svelte';
	import { t } from '$lib/preferences';
	let open = false;
	let scrolled = false;
	let readingProgress = 0;
	let menuButton: HTMLButtonElement;
	let progressFrame = 0;
	function updateProgress() {
		if (progressFrame) return;
		progressFrame = requestAnimationFrame(() => {
			progressFrame = 0;
			const scrollY = window.scrollY;
			const distance = document.documentElement.scrollHeight - window.innerHeight;
			scrolled = scrollY > 20;
			readingProgress = distance > 0 ? Math.min(100, (scrollY / distance) * 100) : 0;
		});
	}
	onMount(() => {
		updateProgress();
		return () => cancelAnimationFrame(progressFrame);
	});
	const links = [
		{ href: '#projects', label: 'Work' },
		{ href: '#about', label: 'About' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#contact', label: 'Contact' }
	];
	function closeMenu() {
		open = false;
	}
	function handleKey(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) {
			closeMenu();
			menuButton?.focus();
		}
	}
</script>

<svelte:window
	onkeydown={handleKey}
	onscroll={updateProgress}
	onresize={updateProgress}
	onload={updateProgress}
/>
<a class="skip-link" href="#main">{$t('Skip to content')}</a>
<header class="site-header" class:scrolled>
	<nav class="shell nav-bar" aria-label={$t('Main navigation')}>
		<a class="brand" href="#home" onclick={closeMenu} aria-label="Dominik Dierberger"
			>dd<span>.</span><span class="brand-name">Dominik Dierberger</span></a
		>
		<div class="desktop-links">
			{#each links as link}<a href={link.href}>{$t(link.label)}</a>{/each}<a
				class="nav-cv"
				href="/resume">{$t('CV')} ↗</a
			>
		</div>
		<div class="nav-tools">
			<Preferences /><button
				bind:this={menuButton}
				class="menu-toggle"
				type="button"
				aria-expanded={open}
				aria-controls="mobile-navigation"
				onclick={() => (open = !open)}
				>{$t(open ? 'Close' : 'Menu')} <span aria-hidden="true">{open ? '×' : '+'}</span></button
			>
		</div>
	</nav>
	<nav
		id="mobile-navigation"
		class="mobile-links"
		class:is-open={open}
		aria-label={$t('Mobile navigation')}
		inert={!open}
	>
		{#each links as link}<a href={link.href} onclick={closeMenu}
				>{$t(link.label)}<span aria-hidden="true">↗</span></a
			>{/each}<a href="/resume" onclick={closeMenu}>{$t('CV')} ↗</a>
	</nav>
</header>
<div
	class="reading-progress"
	aria-hidden="true"
	style:transform={`scaleX(${readingProgress / 100})`}
></div>
