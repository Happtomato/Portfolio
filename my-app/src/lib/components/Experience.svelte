<script lang="ts">
	import { reveal } from '../actions/reveal';
</script>

<section class="bg-darkblue px-10 py-20">
	<div class="relative mx-auto max-w-4xl">
		<h2
			class="mb-10 bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-center text-4xl font-bold text-transparent"
		>
			Experience
		</h2>
		<div
			class="pointer-events-none absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-accentPink/40 md:block"
		></div>
		<div class="space-y-12">
			<div
				class="relative items-stretch md:grid md:grid-cols-2"
				use:reveal={{ direction: 'left', type: 'scale', delay: 0 }}
			>
				<!-- center dot -->
				<div
					class="hidden md:block absolute top-8 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-accentPink shadow ring-4 ring-darkblue z-10"
				></div>
				<!-- left card -->
				<div class="flex justify-end md:pr-10">
					<div
						class="group rounded-2xl bg-deepblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-2xl"
					>
						<h3 class="text-2xl font-semibold">Junior Software Developer</h3>
						<p class="text-accentYellow/80">FutureLog — 2024 to 2025</p>
						<p class="mt-2 text-gray-300">
							Worked on backend development using Python (Flask, FastAPI), Docker and Microsoft SQL
							Server. Contributed to the continued development of the supplier web application by
							implementing new features and improving maintainability. Built and maintained internal
							tools including a multilingual AI translation system, a help desk platform with
							chatbots, and a Jira plugin for Mermaid.js diagram rendering. Supported cloud
							deployment on Microsoft Azure and created UI mockups with Figma for internal
							interfaces.
						</p>
					</div>
				</div>
				<div class="hidden md:block"></div>
			</div>

			<div
				class="relative items-stretch md:grid md:grid-cols-2"
				use:reveal={{ direction: 'right', type: 'fade', delay: 100 }}
			>
				<div
					class="hidden md:block absolute top-8 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-accentOrange shadow ring-4 ring-darkblue z-10"
				></div>
				<div class="hidden md:block"></div>
				<!-- right card -->
				<div class="flex justify-start md:pl-10">
					<div
						class="group rounded-2xl bg-lightblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-2xl"
					>
						<h3 class="text-2xl font-semibold">Software Development Intern</h3>
						<p class="text-accentYellow/80">FutureLog — 2023 to 2024</p>
						<p class="mt-2 text-gray-300">
							Took part in the complete rebuild of a legacy supplier web application: planning
							infrastructure, writing documentation, and implementing functionality using Flask and
							Docker. Worked with Microsoft SQL Server and Git to build APIs and data integrations.
							Gained valuable project experience in a compact, agile team setup.
						</p>
					</div>
				</div>
			</div>

			<div
				class="relative items-stretch md:grid md:grid-cols-2"
				use:reveal={{ direction: 'left', type: 'blur', delay: 200 }}
			>
				<div
					class="hidden md:block absolute top-8 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-accentYellow shadow ring-4 ring-darkblue z-10"
				></div>
				<!-- left card -->
				<div class="flex justify-end md:pr-10">
					<div
						class="group rounded-2xl bg-deepblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-2xl"
					>
						<h3 class="text-2xl font-semibold">Backend Developer Trainee</h3>
						<p class="text-accentYellow/80">FutureLog — 2021 to 2023</p>
						<p class="mt-2 text-gray-300">
							Supported internal projects with backend logic using Python and SQL. Assisted with
							REST API development and infrastructure improvements using Docker and Azure.
							Transitioned from general support work into technical development responsibilities.
						</p>
					</div>
				</div>
				<div class="hidden md:block"></div>
			</div>

			<div
				class="relative items-stretch md:grid md:grid-cols-2"
				use:reveal={{ direction: 'right', type: 'rotate', delay: 300 }}
			>
				<div
					class="hidden md:block absolute top-8 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-accentPink shadow ring-4 ring-darkblue z-10"
				></div>
				<div class="hidden md:block"></div>
				<!-- right card -->
				<div class="flex justify-start md:pl-10">
					<div
						class="group rounded-2xl bg-lightblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-2xl"
					>
						<h3 class="text-2xl font-semibold">IT Support</h3>
						<p class="text-accentYellow/80">FutureLog — 2021 to 2023</p>
						<p class="mt-2 text-gray-300">
							Provided day-to-day tech support for internal teams across offices. Managed hardware
							and software issues and assisted with smaller scripting tasks. Used the opportunity to
							start contributing to backend work and technical documentation.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
