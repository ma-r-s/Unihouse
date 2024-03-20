<script>
	import * as Select from '$lib/components/ui/select';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { Slider } from '$lib/components/ui/slider';
	import { t } from '$lib/translations';

	const sizes = [
		{ label: 'small', value: 'sm' },
		{ label: 'medium', value: 'md' },
		{ label: 'large', value: 'lg' },
		{ label: 'xlarge', value: 'xl' }
	];
	export let size = '';
	let minPrice = 0.5;
	let maxPrice = 5;
	export let price = [minPrice, maxPrice];
	let maxDist = 10;
	export let distance = [maxDist];
</script>

<div class="flex items-center gap-4 overflow-auto p-1 [&::-webkit-scrollbar]:hidden">
	<p class="font-semibold">{$t('filter')}:</p>
	<Popover.Root>
		<Popover.Trigger>
			<Button class="w-28">
				{#if price[0] === minPrice && price[1] === maxPrice}
					{$t('price')}
				{:else if price[0] === minPrice}
					Max: {price[1]} M
				{:else if price[1] === maxPrice}
					Min: {price[0]} M
				{:else}
					{price[0]}M - {price[1]}M
				{/if}
			</Button>
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
			<Button class="w-28">
				{#if distance[0] === maxDist}
					{$t('distance')}
				{:else}
					Max: {distance[0]} km
				{/if}
			</Button>
		</Popover.Trigger>
		<Popover.Content>
			<div class="mb-4 flex w-full justify-between">
				<p>Max: {distance[0]} km</p>
			</div>
			<Slider bind:value={distance} max={maxDist} step={0.1} class="w-full" />
		</Popover.Content>
	</Popover.Root>

	<Select.Root bind:selected={size}>
		<Select.Trigger class="w-32 shrink-0">
			<Select.Value placeholder={$t('sizes')} />
		</Select.Trigger>
		<Select.Content>
			{#each sizes as size}
				<Select.Item value={size.value}>{$t(size.label)}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
