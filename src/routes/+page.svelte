<script>
	import Toggle from '$lib/Toggle.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import Filters from './Filters.svelte';
</script>

<div class="mb-6 flex items-center justify-between">
	<h1 class="text-2xl font-bold">Unihousing</h1>
	<Toggle />
</div>

<Filters />

<Separator class="my-6" />
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
