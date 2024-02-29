<script>
	import { cn } from '$lib/utils';
	let className = undefined;
	export { className as class };
</script>

<div class={cn('', className)} {...$$restProps}>
	<slot />
</div>
