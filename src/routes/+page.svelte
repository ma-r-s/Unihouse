<script>
	import Toggle from '$lib/Toggle.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Slider } from '$lib/components/ui/slider';
	const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
	let size = '';
	let min;
	let max;
	let distance = [5, 8];
</script>

<div class="flex items-center justify-between p-8">
	<h1 class="text-2xl font-bold">Unihousing</h1>
	<Toggle />
</div>
<div class="flex items-center justify-center gap-4" variant="ghost">
	<div class="flex items-center gap-2">
		<Input
			bind:value={min}
			type="number"
			min="500000"
			max={max || 4000000}
			step="100000"
			placeholder="Min"
			class="w-28"
		/>
		-
		<Input
			bind:value={max}
			type="number"
			min={min || 500000}
			max="4000000"
			step="100000"
			placeholder="Max"
			class="w-28"
		/>
	</div>
	<Slider bind:value={distance} max={10} step={0.1} class="w-44" />
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
<Card.Root class="m-8 w-72">
	<Card.Header>
		{min} - {max}
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
