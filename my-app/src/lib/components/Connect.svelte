<script lang="ts">
	import { reveal } from '../actions/reveal';
</script>

<section id="connect" class="bg-lightblue px-10 py-20 text-center" use:reveal>
	<h2
		class="mb-6 bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-4xl font-bold text-transparent"
	>
		Let’s Connect
	</h2>
	<p class="mb-6 text-accentYellow/80">
		Interested in working together or just want to say hi? Reach out below 👇
	</p>
	<div class="flex flex-col items-start justify-center gap-12 md:flex-row">
		<!-- Left: Contact Form -->
		<form class="w-full space-y-4 rounded-xl bg-deepblue/20 p-6 text-left md:w-1/2">
			<div>
				<label for="name" class="mb-1 block font-semibold text-accentYellow">Name</label>
				<input
					id="name"
					name="name"
					type="text"
					class="w-full rounded-lg bg-darkblue px-4 py-2 text-white focus:ring-2 focus:ring-accentPink focus:outline-none"
					required
				/>
			</div>
			<div>
				<label for="email" class="mb-1 block font-semibold text-accentYellow">Email</label>
				<input
					id="email"
					name="email"
					type="email"
					class="w-full rounded-lg bg-darkblue px-4 py-2 text-white focus:ring-2 focus:ring-accentPink focus:outline-none"
					required
				/>
			</div>
			<div>
				<label for="message" class="mb-1 block font-semibold text-accentYellow">Message</label>
				<textarea
					id="message"
					name="message"
					rows="4"
					class="w-full rounded-lg bg-darkblue px-4 py-2 text-white focus:ring-2 focus:ring-accentPink focus:outline-none"
					required
				></textarea>
			</div>
			<button
				type="submit"
				class="w-full rounded-xl bg-accentPink px-6 py-3 font-semibold text-deepblue transition hover:bg-accentOrange"
			>
				Submit
			</button>
		</form>
		<!-- Right: Social Buttons -->
		<div class="flex w-full flex-col gap-6 md:w-1/2">
			<a
				href="mailto:dominik@dierberger.com"
				class="flex transform items-center justify-center gap-3 rounded-2xl bg-accentPink px-8 py-4 text-lg font-bold text-deepblue transition transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:bg-accentOrange"
			>
				<!-- Mail icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
				dominik@dierberger.com
			</a>
			<h3 class="mt-6 text-2xl font-semibold text-accentYellow">Socials</h3>
			<div class="mt-3 flex gap-4">
				<a
					href="https://www.linkedin.com/in/dominik-dierberger-066a061b6/"
					target="_blank"
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-accentPink text-deepblue shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:bg-accentOrange"
				>
					<!-- LinkedIn SVG icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"
						/>
					</svg>
				</a>
				<a
					href="https://github.com/Happtomato"
					target="_blank"
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-accentPink text-deepblue shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:bg-accentOrange"
				>
					<!-- GitHub SVG icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>
