<script>
	import Toggle from '$lib/Toggle.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Slider } from '$lib/components/ui/slider';
	import { Separator } from '$lib/components/ui/separator';

	const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
	let size = '';
	let minPrice = 0.5;
	let maxPrice = 5;
	let price = [minPrice, maxPrice];

	let maxDist = 10;
	let distance = [maxDist];
</script>

<div class="mb-6 flex items-center justify-between">
	<h1 class="text-2xl font-bold">Unihousing</h1>
	<Toggle />
</div>

<div class="mb-6 flex items-center gap-4">
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
<Separator class="mb-6" />
<Card.Root class=" w-72">
	<Card.Header>
		<Card.Title>Card Title</Card.Title>
		<Card.Description>Card Description</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>Card Content</p>
	</Card.Content>
	<Card.Footer>
		<p>Card Footer</p>
	</Card.Footer>
</Card.Root>
