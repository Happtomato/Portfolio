<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let open = false;
	let scrolled = false;
	let nav: HTMLElement;

	const links = [
		{ href: '#home', label: 'Home' },
		{ href: '#about', label: 'About Me' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#education', label: 'Education' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#contact', label: 'Contact' }
	];

	function toggle() {
		open = !open;
	}

	function closeMenu() {
		open = false;
	}

	function handleScroll() {
		scrolled = typeof window !== 'undefined' && window.scrollY > 8;
	}

	function updateNavOffset() {
		if (typeof window === 'undefined' || !nav) return;
		const h = nav.offsetHeight;
		document.documentElement.style.setProperty('--nav-h', h + 'px');
	}

	onMount(() => {
		handleScroll();
		updateNavOffset();
		const ro = new ResizeObserver(updateNavOffset);
		ro.observe(nav);
		window.addEventListener('resize', updateNavOffset, { passive: true });
		window.addEventListener('scroll', handleScroll, { passive: true });

		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeMenu();
		};
		window.addEventListener('keydown', onKey);

		return () => {
			ro.disconnect();
			window.removeEventListener('resize', updateNavOffset);
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('keydown', onKey);
		};
	});
</script>

<nav class="fixed inset-x-0 top-0 z-50 w-full pt-2" bind:this={nav}>
	<div
		class="mx-auto max-w-7xl px-4 pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] sm:px-6 lg:px-8"
	>
		<div
			class="mt-0 flex h-16 transform-gpu items-center justify-between rounded-xl border border-white/10 px-4 pt-[env(safe-area-inset-top)] shadow-lg backdrop-blur transition-colors duration-300 will-change-transform"
			class:shadow-xl={scrolled}
		>
			<!-- Brand -->
			<a
				href="#home"
				class="flex items-center gap-2 rounded-md focus:ring-2 focus:ring-accentYellow/70 focus:outline-none"
			>
				<span
					class="bg-gradient-to-r from-pink-500 to-accentYellow bg-clip-text text-xl font-semibold text-transparent"
					>Dominik Dierberger</span
				>
			</a>

			<!-- Desktop Nav -->
			<div class="hidden items-center gap-6 lg:flex">
				{#each links as { href, label }}
					<a
						{href}
						class="rounded-md px-1 py-1 font-medium text-white/90 transition-colors hover:text-accentYellow focus:ring-2 focus:ring-accentYellow/70 focus:outline-none"
						>{label}</a
					>
				{/each}
				<a
					href="/resume"
					class="ml-2 inline-flex items-center rounded-lg bg-accentYellow px-3 py-1.5 text-sm font-semibold text-darkblue hover:brightness-110 focus:ring-2 focus:ring-accentYellow/70 focus:outline-none"
					>Resume</a
				>
			</div>

			<!-- Mobile hamburger -->
			<button
				class="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-accentYellow focus:ring-2 focus:ring-accentYellow/70 focus:outline-none lg:hidden"
				aria-controls="primary-navigation"
				aria-expanded={open}
				on:click={toggle}
				aria-label={open ? 'Close menu' : 'Open menu'}
			>
				{#if open}
					<!-- X icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"
							clip-rule="evenodd"
						/>
					</svg>
				{:else}
					<!-- Hamburger icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M4 6h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2Zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2Zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2Z"
						/>
					</svg>
				{/if}
			</button>
		</div>

		{#if open}
			<div
				class="fixed inset-0 z-40 bg-black/40"
				in:fade={{ duration: 150 }}
				out:fade={{ duration: 150 }}
				on:click={closeMenu}
				aria-hidden="true"
			></div>
		{/if}
	</div>

	<!-- Mobile menu panel -->
	<div id="primary-navigation" class="relative z-50 lg:hidden" aria-hidden={!open}>
		{#if open}
			<div
				class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				in:slide={{ duration: 220, easing: cubicOut }}
				out:slide={{ duration: 180, easing: cubicOut }}
			>
				<div
					class="mt-2 mb-4 rounded-2xl border border-white/10 bg-darkblue/95 shadow-xl backdrop-blur"
				>
					<div class="space-y-1 px-4 py-3">
						{#each links as { href, label }}
							<a
								{href}
								class="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:text-accentYellow focus:ring-2 focus:ring-accentYellow/70 focus:outline-none"
								on:click={closeMenu}>{label}</a
							>
						{/each}
						<a
							href="/resume"
							class="mt-1 block rounded-lg bg-accentYellow px-3 py-2 text-base font-semibold text-darkblue hover:brightness-110 focus:ring-2 focus:ring-accentYellow/70 focus:outline-none"
							on:click={closeMenu}>Resume</a
						>
					</div>
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	/* Ensure content below doesn't hide under the fixed navbar */
	:global(body) {
		scroll-behavior: smooth;
	}
	:global(html) {
		height: -webkit-fill-available;
	}
	:global(body) {
		min-height: 100vh;
		min-height: -webkit-fill-available;
	}
</style>
