<script>
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import { getEmblaContext } from './context.js';
	let className = undefined;
	export { className as class };
	export let variant = 'outline';
	export let size = 'icon';
	const { orientation, canScrollNext, scrollNext, handleKeyDown } =
		getEmblaContext('<Carousel.Next/>');
</script>

<Button
	{variant}
	{size}
	class={cn(
		'absolute h-8 w-8 touch-manipulation rounded-full',
		$orientation === 'horizontal'
			? '-right-12 top-1/2 -translate-y-1/2'
			: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
		className
	)}
	disabled={!$canScrollNext}
	on:click={scrollNext}
	on:keydown={handleKeyDown}
	{...$$restProps}
>
	<ArrowRight class="size-4" />
	<span class="sr-only">Next slide</span>
</Button>
