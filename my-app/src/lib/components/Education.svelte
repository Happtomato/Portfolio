<script lang="ts">
	import { reveal } from '../actions/reveal';
	const education = [
		{
			school: 'Lucerne University of Applied Sciences and Arts (HSLU)',
			degree: 'BSc Artifical Intelligence and Machine Learning',
			years: '2024 – ongoing'
		},
		{
			school: 'Berufsbildung Baden (BBB) & Alte Kantonsschule Aarau',
			degree: 'EFZ Software Developer & Berufsmatura',
			years: '2020 – 2024'
		}
	];
</script>

<section class="bg-deepblue py-20">
	<h2
		class="mb-12 bg-gradient-to-r from-accentPink via-accentOrange
        to-accentYellow bg-clip-text text-center text-4xl
        font-bold text-transparent
    "
	>
		Education
	</h2>
	<div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
		{#each education as edu, i}
			<div
				class={i === 0
					? 'rounded-2xl bg-darkblue p-6 shadow-lg transition-transform hover:scale-105 hover:bg-accentPink hover:text-deepblue'
					: 'rounded-2xl bg-darkblue/90 p-6 shadow-lg transition-transform hover:scale-105 hover:bg-accentOrange hover:text-deepblue'}
				use:reveal={i === 0
					? { direction: 'right', type: 'fade' }
					: { direction: 'left', type: 'fade' }}
			>
				<h3 class="text-2xl font-semibold">{edu.school}</h3>
				<p class="text-accentYellow/90">{edu.degree}</p>
				<p class="text-gray-400">{edu.years}</p>
			</div>
		{/each}
	</div>
</section>
