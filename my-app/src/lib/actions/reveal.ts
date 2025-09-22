type RevealOptions = {
	direction?: 'top' | 'bottom' | 'left' | 'right';
	type?: 'fade' | 'scale' | 'blur' | 'rotate';
	delay?: number;
	duration?: number;
};

export function reveal(
	node: HTMLElement,
	{ direction = 'bottom', type = 'fade', delay = 0, duration = 600 }: RevealOptions = {}
) {
	// base transform for directions
	const dirTransforms: Record<string, string> = {
		top: 'translateY(20px)',
		bottom: 'translateY(-20px)',
		left: 'translateX(20px)',
		right: 'translateX(-20px)'
	};

	const initialTransform = dirTransforms[direction] || 'translateY(-20px)';
	let initialFilter = '';
	let initialScale = '';
	let initialRotate = '';

	if (type === 'scale') initialScale = ' scale(0.9)';
	if (type === 'rotate') initialRotate = ' rotateY(10deg)';
	if (type === 'blur') initialFilter = ' blur(10px)';

	// initial styles
	node.style.opacity = '0';
	node.style.transform = `${initialTransform}${initialScale}${initialRotate}`;
	node.style.filter = initialFilter;
	node.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms`;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.style.opacity = '1';
				node.style.transform = 'translateX(0) translateY(0) scale(1) rotateY(0)';
				node.style.filter = 'blur(0)';
			} else {
				node.style.opacity = '0';
				node.style.transform = `${initialTransform}${initialScale}${initialRotate}`;
				node.style.filter = initialFilter;
			}
		},
		{ threshold: 0.1 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
