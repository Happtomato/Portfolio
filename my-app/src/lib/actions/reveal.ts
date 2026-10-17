type RevealOptions = { delay?: number; duration?: number };

/** Progressive enhancement: content stays visible without JS or motion support. */
export function reveal(node: HTMLElement, { delay = 0, duration = 650 }: RevealOptions = {}) {
	const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
	if (preference.matches || !('IntersectionObserver' in window)) return;
	let animation: Animation | undefined;
	const observer = new IntersectionObserver(
		([entry]) => {
			if (!entry.isIntersecting) return;
			animation = node.animate(
				[
					{ opacity: 0, transform: 'translateY(22px)' },
					{ opacity: 1, transform: 'translateY(0)' }
				],
				{ duration, delay, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' }
			);
			observer.unobserve(node);
		},
		{ threshold: 0.06 }
	);
	const stopMotion = () => {
		if (preference.matches) {
			observer.disconnect();
			animation?.cancel();
		}
	};
	preference.addEventListener('change', stopMotion);
	observer.observe(node);
	return {
		destroy() {
			observer.disconnect();
			animation?.cancel();
			preference.removeEventListener('change', stopMotion);
		}
	};
}
