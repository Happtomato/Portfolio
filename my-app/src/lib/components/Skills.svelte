<script lang="ts">
	import { t } from '$lib/preferences';
	import { reveal } from '$lib/actions/reveal';
	const groups = [
		{
			number: '01',
			name: 'Backend & APIs',
			text: 'Where I have the most hands-on experience: application logic, APIs and the data behind them.',
			skills: [
				'Python',
				'Flask',
				'FastAPI',
				'SQL Server',
				'MySQL',
				'SQLite',
				'MongoDB',
				'API Design'
			]
		},
		{
			number: '02',
			name: 'Data & machine learning',
			text: 'Building on my software background through my studies and practical data projects.',
			skills: ['NumPy', 'Pandas', 'Matplotlib', 'Streamlit', 'Data Visualization', 'AI Integration']
		},
		{
			number: '03',
			name: 'Interfaces & applications',
			text: 'Connecting backend systems with interfaces people can use, and exploring game development.',
			skills: [
				'SvelteKit',
				'TypeScript',
				'JavaScript',
				'HTML / CSS',
				'Tailwind CSS',
				'React',
				'Java',
				'C#',
				'Unity'
			]
		},
		{
			number: '04',
			name: 'Deployment & collaboration',
			text: 'Taking projects beyond local development, with an emphasis on clear code and shared ownership.',
			skills: ['Docker', 'Azure', 'Linux', 'Git', 'GitHub', 'CI/CD', 'Postman', 'Agile Teams']
		}
	];
</script>

<section id="skills" class="section">
	<div class="shell">
		<div class="section-heading" use:reveal>
			<div>
				<p class="eyebrow">{$t('03 / MY TOOLKIT')}</p>
				<h2>{$t('The tools behind')} <span class="gradient-text">{$t('the work.')}</span></h2>
			</div>
			<p>
				{$t(
					'Practical experience, a strong backend foundation, and always something new to learn.'
				)}
			</p>
		</div>
		<div class="skills-grid">
			{#each groups as group, i}<article class="skill-card" use:reveal={{ delay: i * 60 }}>
					<span class="card-number">{group.number}</span>
					<h3>{$t(group.name)}</h3>
					<p>{$t(group.text)}</p>
					<ul class="tags">
						{#each group.skills as skill}<li>{$t(skill)}</li>{/each}
					</ul>
				</article>{/each}
		</div>
	</div>
</section>
