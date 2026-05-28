<script lang="ts">
	import { reveal } from '../actions/reveal';
	import FutureLogIcon from '$lib/assets/FutureLogIcon.svg';
</script>

<section id="experience" class="bg-darkblue px-10 py-20">
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
					use:reveal={{ direction: 'right', type: 'scale', delay: 0 }}
			>
				<div
						class="absolute top-8 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-accentYellow shadow ring-4 ring-darkblue md:block"
				></div>

				<div class="hidden md:block"></div>

				<div class="flex justify-start md:pl-10">
					<div
							class="group rounded-2xl bg-lightblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-2xl"
					>
						<div class="mb-2 flex items-center justify-between">
							<div>
								<h3 class="text-2xl font-semibold">HSLU & Independent Projects</h3>
								<p class="text-accentYellow/80">November 2025 to Present</p>
							</div>
						</div>

						<p class="mt-2 text-gray-300">
							Currently studying Artificial Intelligence & Machine Learning at Lucerne University
							of Applied Sciences and Arts. Alongside my studies, I work on practical software and
							data projects in data science, relational databases, cybersecurity, and full-stack
							development. My current focus is on building stronger foundations in software
							architecture, data modelling, machine learning workflows, and structured problem
							solving.
						</p>

						<p class="mt-3 text-gray-300">
							In parallel, I am independently developing a 3D voxel roguelike game in Unity with C#.
							The project serves as a long-term passion project where I implement gameplay logic,
							character classes, object-oriented components, prototyping systems, and first 3D and
							voxel assets.
						</p>

						<div class="mt-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Artificial Intelligence
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Machine Learning
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Data Science
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Databases
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Cybersecurity
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Unity
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								C#
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Game Development
							</span>
						</div>
					</div>
				</div>
			</div>

			<div
					class="relative items-stretch md:grid md:grid-cols-2"
					use:reveal={{ direction: 'left', type: 'scale', delay: 100 }}
			>
				<div
						class="absolute top-8 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-accentPink shadow ring-4 ring-darkblue md:block"
				></div>

				<div class="flex justify-end md:pr-10">
					<div
							class="group rounded-2xl bg-deepblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-2xl"
					>
						<div class="mb-2 flex items-center justify-between">
							<div>
								<h3 class="text-2xl font-semibold">Junior Software Developer</h3>
								<p class="text-accentYellow/80">FutureLog — 2024 to 2025</p>
							</div>
							<img src={FutureLogIcon} alt="FutureLog Icon" class="h-20 w-20" />
						</div>

						<p class="mt-2 text-gray-300">
							Worked on backend development using Python, Flask, FastAPI, Docker, and Microsoft SQL
							Server. Contributed to the continued development of the supplier web application by
							implementing new features and improving maintainability. Built and maintained internal
							tools including a multilingual AI translation system, a help desk platform with
							chatbots, and a Jira plugin for Mermaid.js diagram rendering. Supported cloud
							deployment on Microsoft Azure and created UI mockups with Figma for internal
							interfaces.
						</p>

						<div class="mt-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								Python
							</span>
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								Flask
							</span>
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								FastAPI
							</span>
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								Docker
							</span>
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								SQL Server
							</span>
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								Azure
							</span>
						</div>
					</div>
				</div>

				<div class="hidden md:block"></div>
			</div>

			<div
					class="relative items-stretch md:grid md:grid-cols-2"
					use:reveal={{ direction: 'right', type: 'fade', delay: 200 }}
			>
				<div
						class="absolute top-8 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-accentOrange shadow ring-4 ring-darkblue md:block"
				></div>

				<div class="hidden md:block"></div>

				<div class="flex justify-start md:pl-10">
					<div
							class="group rounded-2xl bg-lightblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-2xl"
					>
						<div class="mb-2 flex items-center justify-between">
							<div>
								<h3 class="text-2xl font-semibold">Software Development Intern</h3>
								<p class="text-accentYellow/80">FutureLog — 2023 to 2024</p>
							</div>
							<img src={FutureLogIcon} alt="FutureLog Icon" class="h-20 w-20" />
						</div>

						<p class="mt-2 text-gray-300">
							Took part in the complete rebuild of a legacy supplier web application: planning
							infrastructure, writing documentation, and implementing functionality using Flask and
							Docker. Worked with Microsoft SQL Server and Git to build APIs and data integrations.
							Gained valuable project experience in a compact, agile team setup.
						</p>

						<div class="mt-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-accentOrange px-3 py-1 text-sm font-semibold text-black">
								Flask
							</span>
							<span class="rounded-full bg-accentOrange px-3 py-1 text-sm font-semibold text-black">
								Docker
							</span>
							<span class="rounded-full bg-accentOrange px-3 py-1 text-sm font-semibold text-black">
								SQL Server
							</span>
							<span class="rounded-full bg-accentOrange px-3 py-1 text-sm font-semibold text-black">
								Git
							</span>
							<span class="rounded-full bg-accentOrange px-3 py-1 text-sm font-semibold text-black">
								Agile
							</span>
						</div>
					</div>
				</div>
			</div>

			<div
					class="relative items-stretch md:grid md:grid-cols-2"
					use:reveal={{ direction: 'left', type: 'blur', delay: 300 }}
			>
				<div
						class="absolute top-8 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-accentYellow shadow ring-4 ring-darkblue md:block"
				></div>

				<div class="flex justify-end md:pr-10">
					<div
							class="group rounded-2xl bg-deepblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-2xl"
					>
						<div class="mb-2 flex items-center justify-between">
							<div>
								<h3 class="text-2xl font-semibold">Internship Development Paris</h3>
								<p class="text-accentYellow/80">FutureLog — 22.09.2022 to 09.10.2022</p>
							</div>
							<img src={FutureLogIcon} alt="FutureLog Icon" class="h-20 w-20" />
						</div>

						<p class="mt-2 text-gray-300">
							As part of a short-term internship at FutureLog’s Paris office, I had the opportunity
							to work in an international environment and gain valuable intercultural experience. I
							supported backend development tasks and familiarized myself with CI/CD pipelines,
							laying an early foundation for modern deployment practices. In parallel, I helped
							relocate the office to a new building, assisting with hardware setup and technical
							infrastructure. This also included providing local IT support to ensure a smooth
							transition. Immersing myself in a different work culture helped strengthen my
							adaptability and communication skills in a multilingual setting.
						</p>

						<div class="mt-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								CI/CD
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								IT Support
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Infrastructure
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Adaptability
							</span>
						</div>
					</div>
				</div>

				<div class="hidden md:block"></div>
			</div>

			<div
					class="relative items-stretch md:grid md:grid-cols-2"
					use:reveal={{ direction: 'right', type: 'blur', delay: 400 }}
			>
				<div
						class="absolute top-8 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-accentYellow shadow ring-4 ring-darkblue md:block"
				></div>

				<div class="hidden md:block"></div>

				<div class="flex justify-start md:pl-10">
					<div
							class="group rounded-2xl bg-lightblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-2xl"
					>
						<div class="mb-2 flex items-center justify-between">
							<div>
								<h3 class="text-2xl font-semibold">Backend Developer Trainee</h3>
								<p class="text-accentYellow/80">FutureLog — 2021 to 2023</p>
							</div>
							<img src={FutureLogIcon} alt="FutureLog Icon" class="h-20 w-20" />
						</div>

						<p class="mt-2 text-gray-300">
							Supported internal projects with backend logic using Python and SQL. Assisted with
							REST API development and infrastructure improvements using Docker and Azure.
							Transitioned from general support work into technical development responsibilities.
						</p>

						<div class="mt-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Python
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								SQL
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								REST API
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Docker
							</span>
							<span class="rounded-full bg-accentYellow px-3 py-1 text-sm font-semibold text-black">
								Azure
							</span>
						</div>
					</div>
				</div>
			</div>

			<div
					class="relative items-stretch md:grid md:grid-cols-2"
					use:reveal={{ direction: 'left', type: 'rotate', delay: 500 }}
			>
				<div
						class="absolute top-8 left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-accentPink shadow ring-4 ring-darkblue md:block"
				></div>

				<div class="flex justify-end md:pr-10">
					<div
							class="group rounded-2xl bg-lightblue p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-2xl"
					>
						<div class="mb-2 flex items-center justify-between">
							<div>
								<h3 class="text-2xl font-semibold">IT Support</h3>
								<p class="text-accentYellow/80">FutureLog — 2021 to 2023</p>
							</div>
							<img src={FutureLogIcon} alt="FutureLog Icon" class="h-20 w-20" />
						</div>

						<p class="mt-2 text-gray-300">
							Provided day-to-day tech support for internal teams across offices. Managed hardware
							and software issues and assisted with smaller scripting tasks. Used the opportunity to
							start contributing to backend work and technical documentation.
						</p>

						<div class="mt-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								Tech Support
							</span>
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								Hardware
							</span>
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								Software
							</span>
							<span class="rounded-full bg-accentPink px-3 py-1 text-sm font-semibold text-black">
								Documentation
							</span>
						</div>
					</div>
				</div>

				<div class="hidden md:block"></div>
			</div>
		</div>
	</div>
</section>