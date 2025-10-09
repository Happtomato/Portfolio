<script>
	import { reveal } from '../actions/reveal.ts';
	const languages = [
		{ name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
		{ name: 'Flask', icon: 'https://cdn.simpleicons.org/flask' },
		{ name: 'Numpy', icon: 'https://cdn.simpleicons.org/numpy' },
		{ name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas' },
		{ name: 'Matplotlib', icon: 'https://icon.icepanel.io/Technology/svg/Matplotlib.svg' },
		{ name: 'FastAPI', icon: 'https://cdn.simpleicons.org/fastapi' },
		{ name: 'Django', icon: 'https://cdn.simpleicons.org/django' },
		{ name: 'Java', icon: 'https://icon.icepanel.io/Technology/svg/Java.svg' },
		{ name: 'C#', icon: 'https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg' },
		{ name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5' },
		{ name: 'CSS3', icon: 'https://cdn.simpleicons.org/css' },
		{ name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
		{ name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' }
	];

	const frameworks = [
		{ name: 'Svelte', icon: 'https://cdn.simpleicons.org/svelte' },
		{ name: 'React', icon: 'https://cdn.simpleicons.org/react' },
		{ name: 'TailwindCSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
		{ name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
		{ name: 'Express.js', icon: 'https://cdn.simpleicons.org/express' }
	];

	const tech = [
		{ name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' },
		{ name: 'Azure', icon: 'https://icon.icepanel.io/Technology/svg/Azure.svg' },
		{ name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase' },
		{ name: 'Git', icon: 'https://cdn.simpleicons.org/git' },
		{ name: 'GitHub', icon: 'https://cdn.simpleicons.org/github' },
		{ name: 'Postman', icon: 'https://cdn.simpleicons.org/postman' },
		{ name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
		{ name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' },
		{ name: 'SQLite', icon: 'https://cdn.simpleicons.org/sqlite' }
	];

	const skills = [
		'CI/CD',
		'API Design',
		'Agile Methodologies',
		'System Design',
		'Project Ownership',
		'Clean Code',
		'Containerization',
		'Data Visualization'
	];

	// Duplicate for seamless loop
	const doubledLanguages = [...languages, ...languages];
	const doubledFrameworks = [...frameworks, ...frameworks];
	const doubledTech = [...tech, ...tech];
	const doubledSkills = [...skills, ...skills];
</script>

<section id="skills" class="overflow-hidden bg-lightblue px-10 py-20">
	<div use:reveal={{ direction: 'bottom', type: 'blur' }} class="mx-auto max-w-6xl">
		<h2
			class="mb-12 bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-center text-4xl font-bold text-transparent"
		>
			Skills
		</h2>

		<!-- Row 1 (Right) -->
		<!-- Row 1 (Right) -->
		<div class="relative flex overflow-hidden">
			<!-- left fade -->
			<div
				class="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-lightblue to-transparent"
			></div>

			<div class="animate-marqueeRight flex min-w-max gap-6">
				{#each doubledLanguages as lang}
					<div
						class="flex transform items-center gap-3 rounded-2xl bg-lightblue px-6 py-3 whitespace-nowrap
                  shadow-lg transition-transform hover:scale-110 hover:bg-accentPink hover:text-lightblue"
					>
						<img src={lang.icon} alt={lang.name} class="h-6 w-6" />
						{lang.name}
					</div>
				{/each}
			</div>

			<!-- right fade -->
			<div
				class="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-lightblue to-transparent"
			></div>
		</div>

		<!-- Row 2 (Left) -->
		<div class="relative mt-6 flex overflow-hidden">
			<div
				class="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-lightblue to-transparent"
			></div>

			<div class="animate-marqueeLeft flex min-w-max gap-6">
				{#each doubledFrameworks as fw}
					<div
						class="flex transform items-center gap-3 rounded-2xl bg-lightblue/80 px-6 py-3 whitespace-nowrap
                  shadow-lg transition-transform hover:scale-110 hover:bg-accentOrange hover:text-lightblue"
					>
						<img src={fw.icon} alt={fw.name} class="h-6 w-6" />
						{fw.name}
					</div>
				{/each}
			</div>

			<div
				class="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-lightblue to-transparent"
			></div>
		</div>

		<!-- Row 3 (Right) -->
		<div class="relative mt-6 flex overflow-hidden">
			<div
				class="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-lightblue to-transparent"
			></div>

			<div class="animate-marqueeRight flex min-w-max gap-6">
				{#each doubledTech as tool}
					<div
						class="flex transform items-center gap-3 rounded-2xl bg-lightblue/90 px-6 py-3 whitespace-nowrap
                  shadow-lg transition-transform hover:scale-110 hover:bg-accentYellow hover:text-lightblue"
					>
						<img src={tool.icon} alt={tool.name} class="h-6 w-6" />
						{tool.name}
					</div>
				{/each}
			</div>

			<div
				class="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-lightblue to-transparent"
			></div>
		</div>

		<!-- Row 4 (Left, no icons just tags) -->
		<div class="relative mt-6 flex overflow-hidden">
			<div
				class="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 bg-gradient-to-r from-lightblue to-transparent"
			></div>

			<div class="animate-marqueeLeft flex min-w-max gap-6">
				{#each doubledSkills as skill}
					<div
						class="transform rounded-2xl bg-lightblue px-6 py-3 whitespace-nowrap
                  shadow-lg transition-transform hover:scale-110 hover:bg-accentPink hover:text-lightblue"
					>
						{skill}
					</div>
				{/each}
			</div>

			<div
				class="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 bg-gradient-to-l from-lightblue to-transparent"
			></div>
		</div>
	</div>
</section>

<style>
	.animate-marqueeLeft {
		animation: marquee-left 20s linear infinite;
	}
	.animate-marqueeRight {
		animation: marquee-right 20s linear infinite;
	}

	@keyframes marquee-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	@keyframes marquee-right {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
