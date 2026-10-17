<script lang="ts">
	import { t } from '$lib/preferences';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="about" class="section section-tinted">
	<div class="shell about-layout" use:reveal>
		<div>
			<p class="eyebrow">{$t('02 / THE PERSON BEHIND THE CODE')}</p>
			<h2>
				{$t('A developer’s mindset.')}<br /><span class="gradient-text"
					>{$t('A creative streak.')}</span
				>
			</h2>
		</div>
		<div class="about-copy">
			<p class="lead">
				{$t('I like understanding how things work — and making them work better.')}
			</p>
			<p>
				{$t(
					'I’m Dominik, a software developer with a focus on Python, APIs and databases. At FutureLog, I contributed to supplier applications, internal tools and AI-powered workflows. I enjoy working in small teams, taking responsibility and turning complex requirements into maintainable software.'
				)}
			</p>
			<p>
				{$t(
					'My studies in Artificial Intelligence & Machine Learning at HSLU build on that practical foundation. Alongside coursework, I explore data applications and develop a 3D voxel roguelike in Unity.'
				)}
			</p>
			<p class="personal-note">
				{$t(
					'Away from the keyboard? You’ll find me making music on drums, piano or guitar, experimenting in the kitchen, building PCs — or spending time with my cats.'
				)}
			</p>
		</div>
	</div>
</section>
