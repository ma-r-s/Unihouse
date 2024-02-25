<script>
	import * as Select from '$lib/components/ui/select';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { Slider } from '$lib/components/ui/slider';

	const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
	let size = '';
	let minPrice = 0.5;
	let maxPrice = 5;
	let price = [minPrice, maxPrice];

	let maxDist = 10;
	let distance = [maxDist];
</script>

<div class="flex items-center gap-4">
	<p class="font-semibold">Filter:</p>
	<Popover.Root>
		<Popover.Trigger>
			<Button>Price</Button>
		</Popover.Trigger>
		<Popover.Content>
			<div class="mb-4 flex w-full justify-between">
				<p>Min: {price[0]} M</p>
				<p>Max: {price[1]} M</p>
			</div>
			<Slider bind:value={price} min={minPrice} max={maxPrice} step={0.1} class="w-full" />
		</Popover.Content>
	</Popover.Root>

	<Popover.Root>
		<Popover.Trigger>
			<Button>Distance</Button>
		</Popover.Trigger>
		<Popover.Content>
			<div class="mb-4 flex w-full justify-between">
				<p>Max: {distance[0]} km</p>
			</div>
			<Slider bind:value={distance} max={maxDist} step={0.1} class="w-full" />
		</Popover.Content>
	</Popover.Root>

	<Select.Root bind:selected={size}>
		<Select.Trigger class="w-32">
			<Select.Value placeholder="Sizes" />
		</Select.Trigger>
		<Select.Content>
			{#each sizes as size}
				<Select.Item value={size}>{size}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
