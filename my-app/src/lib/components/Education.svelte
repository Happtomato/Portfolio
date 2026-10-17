<script lang="ts">
	import { t } from '$lib/preferences';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="education" class="section">
	<div class="shell education-layout" use:reveal>
		<div>
			<p class="eyebrow">{$t('05 / EDUCATION')}</p>
			<h2>{$t('Keep learning.')}<br /><span class="gradient-text">{$t('Keep building.')}</span></h2>
		</div>
		<div class="education-list">
			<article>
				<span class="card-number">{$t('2024 — ongoing')}</span>
				<h3>BSc Artificial Intelligence & Machine Learning</h3>
				<p>{$t('Lucerne University of Applied Sciences and Arts (HSLU)')}</p>
			</article>
			<article>
				<span class="card-number">2020 — 2024</span>
				<h3>{$t('EFZ Software Developer & Berufsmatura')}</h3>
				<p>Berufsbildung Baden (BBB) & Alte Kantonsschule Aarau</p>
			</article>
		</div>
	</div>
</section>
