<script lang="ts">
	import { t } from '$lib/preferences';
	import { reveal } from '$lib/actions/reveal';
	import { projectSpotlight } from '$lib/actions/projectSpotlight';
	import RecipeGeneratorImg from '$lib/assets/ProjectImages/RecipeGenerator.webp';
	import IPAImage from '$lib/assets/ProjectImages/IPA.webp';
	import PlantFinderImg from '$lib/assets/ProjectImages/PlantFinder.webp';
	import ClimateImage from '$lib/assets/ProjectImages/Climate.webp';
	import SteamTrendsImg from '$lib/assets/ProjectImages/SteamTrendsIMG.webp';

	type Project = {
		title: string;
		description: string;
		image: string;
		link?: string;
		github?: string;
		tags?: string[];
	};

	const projects: Project[] = [
		{
			title: 'Steam Player Retention Dashboard',
			description:
				'What keeps players coming back? An HSLU data project combining Steam, SteamCharts and IGDB data into an interactive Svelte dashboard. A Python pipeline collects monthly player history to explore retention over time. LLM-supported forecasting is planned for a later phase.',
			image: SteamTrendsImg,
			link: 'https://steam-prediction.dominik-dierberger.ch/',
			//github: 'https://github.com/Happtomato/DSPRO',
			tags: [
				'SvelteKit',
				'Python',
				'FastAPI',
				'SQLite',
				'Steam Data',
				'SteamCharts',
				'IGDB',
				'Data Story',
				'LLM Planning'
			]
		},
		{
			title: 'Climate Change Switzerland – Data Story',
			description:
				'A guided look at Switzerland’s changing climate. This Streamlit application turns climate data into clear charts and an accessible narrative. I also manage its Ubuntu hosting, reverse proxy and GitHub deployment workflow.',
			image: ClimateImage,
			link: 'https://climate-change-ch.dominik-dierberger.ch',
			github: 'https://github.com/Happtomato/Climate-Change-Switzerland-Data-Story',
			tags: [
				'Streamlit',
				'Data Visualization',
				'Climate Data',
				'Python',
				'Cloudflare Tunnel',
				'Linux',
				'Apache'
			]
		},
		{
			title: 'Plant Finder',
			description:
				'A plant and disease explorer built with SvelteKit and the Perenual API. Server-side SQLite caching reduces repeated API calls, while a self-managed deployment connects the application to the web through Cloudflare Tunnel.',
			image: PlantFinderImg,
			link: 'https://plants.dominik-dierberger.ch',
			github: 'https://github.com/Happtomato/PlantFinder',
			tags: [
				'SvelteKit',
				'API Integration',
				'SQLite Cache',
				'Adapter-Node',
				'Cloudflare Tunnel',
				'Tailwind',
				'Apache'
			]
		},
		{
			title: 'Recipe Generator',
			description:
				'An everyday use case for generative AI: turn the ingredients you have into recipe ideas. This project combines a web interface and CLI with ChatGPT, with support for saving and reusing recipes.',
			image: RecipeGeneratorImg,
			github: 'https://github.com/Happtomato/diego_kurz_dominik_dierberger',
			tags: ['AI', 'CLI', 'Web App', 'OpenAI', 'Python', 'Recipe Generation']
		},
		{
			title: 'IPA Support Chatbot',
			description:
				'My final apprenticeship project: an AI-powered support chatbot connecting a Svelte interface with a Flask and Azure backend. The focus was a clear, maintainable architecture for automated support answers.',
			image: IPAImage,
			github: 'https://github.com/Happtomato/IPA_SupportBot',
			tags: ['AI', 'Svelte', 'Flask', 'Azure', 'Chatbot', 'Support Automation']
		}
	];
	let selected = 'all';
	const filters = [
		{ id: 'all', label: 'All projects' },
		{ id: 'data', label: 'Data & AI' },
		{ id: 'web', label: 'Web & APIs' },
		{ id: 'assistants', label: 'AI assistants' }
	];
	const categories = ['data', 'data', 'web', 'assistants', 'assistants'];
	$: filtered = projects
		.map((project, index) => ({ ...project, index }))
		.filter((project) => selected === 'all' || categories[project.index] === selected);
</script>

<section id="projects" class="section">
	<div class="shell">
		<div class="section-heading" use:reveal>
			<div>
				<p class="eyebrow">{$t('01 / SELECTED WORK')}</p>
				<h2>{$t('Ideas, built')} <span class="gradient-text">{$t('into reality.')}</span></h2>
			</div>
			<p>
				{$t(
					'From data stories to AI assistants. A selection of projects that put my skills into practice.'
				)}
			</p>
		</div>
		<div class="project-filter" role="group" aria-label={$t('Filter projects')}>
			{#each filters as filter}<button
					type="button"
					aria-pressed={selected === filter.id}
					onclick={() => (selected = filter.id)}>{$t(filter.label)}</button
				>{/each}<span class="filter-count" aria-live="polite"
				>{filtered.length} {$t(filtered.length === 1 ? 'project' : 'projects')}</span
			>
		</div>
		<div class="projects-grid">
			{#each filtered as project, i (project.title)}<article
					class="project-card"
					class:featured={project.index === 0}
					use:reveal={{ delay: i === 0 ? 0 : (i % 2) * 60 }}
				>
					<a
						class="project-image"
						use:projectSpotlight
						href={project.link ?? project.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${$t('Open project in a new tab')}: ${$t(project.title)}`}
						><img
							src={project.image}
							alt={`${$t(project.title)} — ${$t('Application preview')}`}
							loading="lazy"
							decoding="async"
							width="900"
							height="650"
						/><span class="image-arrow" aria-hidden="true">↗</span></a
					>
					<div class="project-content">
						<p class="eyebrow">
							{project.index === 0
								? $t('FEATURED PROJECT / DATA ENGINEERING')
								: `${$t('Project').toUpperCase()} 0${project.index + 1}`}
						</p>
						<h3>{$t(project.title)}</h3>
						<p>{$t(project.description)}</p>
						<ul class="tags">
							{#each project.tags?.slice(0, 5) ?? [] as tag}<li>{$t(tag)}</li>{/each}
						</ul>
						<div class="project-links">
							{#if project.link}<a href={project.link} target="_blank" rel="noopener noreferrer"
									>{$t('Live project')} <span aria-hidden="true">↗</span></a
								>{/if}{#if project.github}<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer">{$t('View code')} <span aria-hidden="true">↗</span></a
								>{/if}
						</div>
					</div>
				</article>{/each}
		</div>
	</div>
</section>
