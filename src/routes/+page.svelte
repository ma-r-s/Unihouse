<script>
	import Toggle from '$lib/Toggle.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import Filters from './Filters.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Logo from '~icons/material-symbols/home-work-outline-rounded';
</script>

<div class="mb-6 flex items-center gap-4">
	<h1 class="hidden text-2xl font-bold sm:block">Unihouse</h1>
	<Logo class="h-8 w-8" />
	<div class="flex-grow"></div>
	<Button variant="outline" href="/login">Login</Button>
	<Button class="hidden md:block" variant="outline" href="/register">Register</Button>
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
