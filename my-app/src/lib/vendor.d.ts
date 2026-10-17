declare module 'three-vanta';
declare module 'vanta/dist/vanta.birds.min.js' {
	export interface BirdsEffect {
		req: number;
		animationLoop(): void;
		destroy(): void;
		setOptions(options: Record<string, unknown>): void;
	}
	export default function birds(options: Record<string, unknown>): BirdsEffect;
}
