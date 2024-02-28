<script>
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import Filters from './Filters.svelte';
</script>

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
