<script lang="ts">
	// Resume page
</script>

<section class="flex min-h-screen flex-col bg-darkblue text-white">
	<!-- Navbar -->
	<nav
		class="flex items-center justify-between bg-gradient-to-r from-darkblue/90 to-deepblue/90 px-6 py-6 shadow-md"
	>
		<a
			href="/"
			class="bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-lg font-semibold text-transparent"
			>← Back to Portfolio</a
		>
		<a
			href="/CV.pdf"
			download
			class="rounded-lg bg-accentPink px-4 py-2 font-semibold text-deepblue transition hover:bg-accentOrange"
			>Download CV</a
		>
	</nav>

	<!-- CV iframe -->
	<div class="flex-1 p-6">
		<iframe
			title="CV"
			src="/CV.pdf"
			class="min-h-screen w-full flex-1 rounded-xl border border-deepblue shadow-xl"
		></iframe>
	</div>
</section>
