<script>
	import { reveal } from '../actions/reveal.ts';
</script>

<section id="about" class="overflow-hidden bg-darkblue px-10 py-20">
	<div use:reveal={{ direction: 'left', type: 'fade' }} class="mx-auto max-w-3xl text-center">
		<h2
			class="mb-6 bg-gradient-to-r from-accentPink via-accentOrange to-accentYellow bg-clip-text text-4xl font-bold text-transparent"
		>
			About Me
		</h2>
		<p class="leading-relaxed text-accentYellow/80">
			I’m Dominik, a motivated and adaptable junior backend developer currently studying Artificial
			Intelligence & Machine Learning at HSLU. I thrive in small, agile teams where I can take
			ownership of projects and apply my skills in Python, Flask, FastAPI, and database engineering.
			Outside of my professional work, I’m passionate about clean code, creative problem-solving,
			and continuous learning.
			<br />
			<br />
			On a personal note, I share my life with my cats who keep me grounded and entertained, and I enjoy
			cooking, making music as a drummer, pianist, and guitarist, playing poker, and building custom
			PCs. Technology and creativity are at the center of both my work and hobbies, and I’m always excited
			to learn something new. :)
		</p>
	</div>
</section>
