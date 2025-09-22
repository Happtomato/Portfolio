<script lang="ts">
	import { onMount } from 'svelte';

	const navLinks = [
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Connect', href: '#connect' }
	];

	let mobileOpen = false;

	onMount(() => {
		const header = document.querySelector('header');
		const headerHeight = header ? header.offsetHeight : 0;
		document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
			anchor.addEventListener('click', (e) => {
				e.preventDefault();
				const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
				const id = href ? href.slice(1) : '';
				const target = id ? document.getElementById(id) : null;
				if (target) {
					const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
					window.scrollTo({ top, behavior: 'smooth' });
				}
			});
		});
	});
</script>

<header
	class="fixed top-0 left-0 z-60 w-full bg-gradient-to-r from-darkblue/90 to-deepblue/90 backdrop-blur-md"
>
	<div class="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:py-4">
		<!-- Logo -->
		<a
			href="/"
			class="bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-xl sm:text-2xl font-bold tracking-wide text-transparent"
		>
			Dominik Dierberger
		</a>

		<!-- Nav links + Resume button -->
		<nav class="hidden md:flex items-center gap-6">
			{#each navLinks as link}
				<a href={link.href} class="text-white transition hover:text-accentPink">
					{link.name}
				</a>
			{/each}

			<!-- Resume Button -->
			<a
				href="/resume"
				class="rounded-xl bg-accentPink px-4 py-2 font-semibold text-deepblue shadow-md transition hover:bg-accentOrange"
			>
				Resume
			</a>
		</nav>
		<button class="md:hidden text-white flex-shrink-0 relative ml-auto" on:click={() => mobileOpen = !mobileOpen}>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
</header>

<!-- keep space so content isn’t hidden behind fixed navbar -->
<div class="h-20"></div>

{#if mobileOpen}
  <div class="fixed inset-0 top-[64px] z-40">
    <nav class="md:hidden flex flex-col items-center gap-6 bg-deepblue/95 py-6 w-full">
      {#each navLinks as link}
        <a href={link.href} class="text-white transition hover:text-accentPink" on:click={() => mobileOpen = false}>
          {link.name}
        </a>
      {/each}
      <a
        href="/resume"
        class="rounded-xl bg-accentPink px-4 py-2 font-semibold text-deepblue shadow-md transition hover:bg-accentOrange"
        on:click={() => mobileOpen = false}
      >
        Resume
      </a>
    </nav>
  </div>
{/if}
