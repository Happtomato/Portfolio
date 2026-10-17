<script lang="ts">
	import { t } from '$lib/preferences';
	import { reveal } from '$lib/actions/reveal';
	const roles = [
		{
			date: 'Nov 2025 — Present',
			company: 'HSLU & independent projects',
			role: 'Learning by building',
			description:
				'Developing practical projects in data science, databases and full-stack development alongside my AI & Machine Learning studies. Independently building a 3D voxel roguelike in Unity and C#.',
			tags: ['Data Science', 'Software Architecture', 'Unity / C#']
		},
		{
			date: '2024 — 2025',
			company: 'FutureLog',
			role: 'Junior Software Developer',
			description:
				'Developed backend features for the supplier web application with Python, Flask, FastAPI and SQL Server. Built and maintained internal tools, including a multilingual AI translation system, a chatbot help desk and a Jira plugin for Mermaid diagrams. Supported deployments on Azure.',
			tags: ['Python', 'FastAPI', 'SQL Server', 'Docker', 'Azure']
		},
		{
			date: '2023 — 2024',
			company: 'FutureLog',
			role: 'Software Development Intern',
			description:
				'Contributed to rebuilding a legacy supplier application, from infrastructure planning and documentation to Flask APIs and data integrations. Worked with Docker, SQL Server and Git in a small agile team.',
			tags: ['Flask', 'Docker', 'API Development']
		},
		{
			date: '22 Sep — 9 Oct 2022',
			company: 'FutureLog · Paris',
			role: 'Development Internship',
			description:
				'Supported backend development and explored CI/CD in an international team. Helped with office infrastructure, hardware setup and local IT support during an office relocation.',
			tags: ['CI/CD', 'Infrastructure', 'International Collaboration']
		},
		{
			date: '2021 — 2023',
			company: 'FutureLog',
			role: 'Backend Developer Trainee & IT Support',
			description:
				'Provided technical support across offices while taking on backend responsibilities. Contributed Python and SQL logic, REST APIs, scripting and documentation, with exposure to Docker and Azure.',
			tags: ['Python', 'SQL', 'REST APIs', 'IT Support']
		}
	];
</script>

<section id="experience" class="section section-tinted">
	<div class="shell">
		<div class="section-heading" use:reveal>
			<div>
				<p class="eyebrow">{$t('04 / EXPERIENCE')}</p>
				<h2>{$t('A foundation built')} <span class="gradient-text">{$t('in practice.')}</span></h2>
			</div>
			<a class="text-link" href="/resume">{$t('View my full resume ↗')}</a>
		</div>
		<div class="timeline">
			{#each roles as role}<article class="timeline-row" use:reveal>
					<div class="timeline-meta">
						<span>{$t(role.date)}</span>
						<p>{$t(role.company)}</p>
					</div>
					<div class="timeline-content">
						<h3>{$t(role.role)}</h3>
						<p>{$t(role.description)}</p>
						<ul class="tags">
							{#each role.tags as tag}<li>{$t(tag)}</li>{/each}
						</ul>
					</div>
				</article>{/each}
		</div>
	</div>
</section>
