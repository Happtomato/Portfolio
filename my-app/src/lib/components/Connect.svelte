<script lang="ts">
	import { t } from '$lib/preferences';
	import { reveal } from '$lib/actions/reveal';
	let copyStatus = '';
	async function copyEmail() {
		try {
			await navigator.clipboard.writeText('dominik@dierberger.com');
			copyStatus = 'Copied!';
		} catch {
			copyStatus = 'Could not copy. Use the email link above.';
		}
	}
</script>

<section id="contact" class="section contact-section">
	<div class="shell" use:reveal>
		<p class="eyebrow">{$t('06 / GET IN TOUCH')}</p>
		<h2>
			{$t('Good software starts')}<br />{$t('with')}
			<span class="gradient-text">{$t('a conversation.')}</span>
		</h2>
		<p class="contact-intro">
			{$t(
				'Have a project in mind, a role to discuss, or a question about my work? I’d be happy to hear from you.'
			)}
		</p>
		<a class="contact-email" href="mailto:dominik@dierberger.com"
			>dominik@dierberger.com <span aria-hidden="true">↗</span></a
		>
		<div class="copy-email">
			<button type="button" onclick={copyEmail}>{$t('Copy email')} ⧉</button><span role="status"
				>{$t(copyStatus)}</span
			>
		</div>
		<div class="contact-links">
			<a
				href="https://www.linkedin.com/in/dominik-dierberger-066a061b6/"
				target="_blank"
				rel="noopener noreferrer">LinkedIn ↗</a
			><a href="https://github.com/Happtomato" target="_blank" rel="noopener noreferrer"
				>GitHub ↗</a
			><a href="/resume">{$t('CV ↗')}</a>
		</div>
	</div>
</section>
