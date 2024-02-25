<script>
	import Toggle from '$lib/Toggle.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import Filters from './Filters.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Logo from '~icons/material-symbols/home-work-outline-rounded';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Menu from '~icons/material-symbols/menu-rounded';
</script>

<div class="mb-6 flex items-center gap-4">
	<h1 class="text-2xl font-bold">Unihouse</h1>
	<Logo class="h-8 w-8 shrink-0" />
	<div class="flex-grow"></div>
	<Button class="hidden sm:block" variant="link" href="/publish">Become a Host</Button>
	<Button class="hidden sm:block" variant="outline" href="/login">Login</Button>
	<Button class="hidden sm:block" variant="outline" href="/register">Register</Button>
	<Toggle />

	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button class="sm:hidden" variant="ghost" builders={[builder]}><Menu></Menu></Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56">
			<DropdownMenu.Item href="/login">Login</DropdownMenu.Item>
			<DropdownMenu.Item href="/register">Register</DropdownMenu.Item>
			<DropdownMenu.Item href="/publish">Become a Host</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
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
