<script lang="ts">
	import { t } from '$lib/preferences';
</script>

<footer class="site-footer">
	<div class="shell footer-inner">
		<p>© {new Date().getFullYear()} Dominik Dierberger</p>
		<span>{$t('Built with curiosity. And Svelte.')}</span><a href="#home">{$t('Back to top ↑')}</a>
	</div>
</footer>
