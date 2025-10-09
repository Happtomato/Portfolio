<script lang="ts">
	// Resume page
</script>

<section
	class="flex min-h-screen flex-col overflow-x-hidden overflow-y-hidden overscroll-none bg-darkblue text-white"
>
	<!-- Navbar -->
	<nav class="fixed inset-x-0 top-0 z-50 w-full pt-2">
		<div
			class="mx-auto max-w-7xl px-4 pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] sm:px-6 lg:px-8"
		>
			<div
				class="mt-0 flex h-16 items-center justify-between rounded-xl border border-white/10 px-4 pt-[env(safe-area-inset-top)] shadow-lg backdrop-blur"
			>
				<a
					href="/"
					class="flex items-center gap-2 rounded-md focus:ring-2 focus:ring-accentYellow/70 focus:outline-none"
				>
					<span
						class="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-accentYellow bg-clip-text text-xl font-semibold text-transparent"
						>← Back to Portfolio</span
					>
				</a>
				<a
					href="/CV.pdf"
					download
					class="inline-flex items-center rounded-lg bg-accentYellow px-3 py-1.5 text-sm font-semibold text-darkblue hover:brightness-110 focus:ring-2 focus:ring-accentYellow/70 focus:outline-none"
					>Download CV</a
				>
			</div>
		</div>
	</nav>
	<div class="mt-20"></div>

	<!-- CV iframe -->
	<div class="flex-1 overflow-y-auto overscroll-contain p-6 pt-8">
		<div class="h-[85vh] w-full overscroll-contain">
			<object
				data="/CV.pdf"
				type="application/pdf"
				width="100%"
				height="100%"
				class="h-full w-full rounded-xl border border-deepblue shadow-xl"
				aria-label="Embedded PDF of CV"
			>
				<p class="rounded-xl border border-deepblue bg-deepblue/20 p-4 text-sm leading-relaxed">
					Your device doesn’t support embedded PDFs.
					<a href="/CV.pdf" target="_blank" rel="noopener" class="underline">Open the CV</a>
					or
					<a href="/CV.pdf" download class="underline">download it</a>.
				</p>
			</object>
		</div>
	</div>
</section>

<style>
	:global(html, body) {
		/* Prevent side spill and show consistent bg behind rubber-banding */
		overflow-x: hidden;
		background-color: #0b1221; /* matches bg-deepblue */
	}

	/* Reduce iOS top/bottom rubber-band from revealing white */
	:global(html),
	:global(body) {
		overscroll-behavior-y: none;
	}
</style>
