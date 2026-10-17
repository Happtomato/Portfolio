/** Pointer-only decoration; links remain ordinary links for touch and keyboard users. */
export function projectSpotlight(node: HTMLElement) {
	if (
		window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
		window.matchMedia('(hover: none)').matches
	)
		return;

	let frame = 0;
	let bounds: DOMRect | undefined;
	let pointer: PointerEvent | undefined;
	function measure() {
		bounds = node.getBoundingClientRect();
	}
	function move(event: PointerEvent) {
		pointer = event;
		if (frame) return;
		frame = requestAnimationFrame(() => {
			frame = 0;
			if (!pointer || !bounds) return;
			const { left, top, width, height } = bounds;
			node.style.setProperty('--pointer-x', `${((pointer.clientX - left) / width) * 100}%`);
			node.style.setProperty('--pointer-y', `${((pointer.clientY - top) / height) * 100}%`);
		});
	}

	function reset() {
		cancelAnimationFrame(frame);
		frame = 0;
		pointer = undefined;
		bounds = undefined;
		node.style.removeProperty('--pointer-x');
		node.style.removeProperty('--pointer-y');
	}

	node.addEventListener('pointerenter', measure);
	node.addEventListener('pointermove', move);
	node.addEventListener('pointerleave', reset);
	return {
		destroy() {
			reset();
			node.removeEventListener('pointerenter', measure);
			node.removeEventListener('pointermove', move);
			node.removeEventListener('pointerleave', reset);
		}
	};
}
