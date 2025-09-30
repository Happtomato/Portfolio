<script lang="ts">
	// Resume page
</script>

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


<section class="flex min-h-screen flex-col bg-darkblue text-white overflow-x-hidden overflow-y-hidden overscroll-none">
	<!-- Navbar -->
	<nav class="fixed inset-x-0 top-0 z-50 w-full pt-2">
	  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
	    <div class="mt-0 flex h-16 rounded-xl items-center justify-between px-4 pt-[env(safe-area-inset-top)] shadow-lg backdrop-blur border border-white/10">
	      <a href="/" class="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accentYellow/70 rounded-md">
	        <span class="text-xl font-semibold bg-gradient-to-r from-pink-500 via-fuchsia-400 to-accentYellow text-transparent bg-clip-text">← Back to Portfolio</span>
	      </a>
	      <a
	        href="/CV.pdf"
	        download
	        class="inline-flex items-center rounded-lg bg-accentYellow px-3 py-1.5 text-sm font-semibold text-darkblue hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-accentYellow/70"
	      >Download CV</a>
	    </div>
	  </div>
	</nav>
	<div class="mt-20"></div>

	<!-- CV iframe -->
	<div class="flex-1 p-6 pt-8 overflow-y-auto overscroll-contain">
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
