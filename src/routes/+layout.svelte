<script>
	import Toggle from '$lib/Toggle.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Logo from '~icons/material-symbols/home-work-outline-rounded';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Menu from '~icons/material-symbols/menu-rounded';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	export let data;
</script>

<ModeWatcher />
<div class="container py-10">
	<div class="mb-6 flex gap-4">
		<a href="/" class="flex gap-2">
			<h1 class="text-2xl font-bold">Unihouse</h1>
			<Logo class="h-8 w-8 shrink-0" />
		</a>
		<div class="flex-grow"></div>
		{#if !data.user}
			<Button class="hidden sm:block" variant="outline" href="/login">Login</Button>
			<Button class="hidden sm:block" variant="outline" href="/register">Register</Button>
			<Toggle />
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button class="sm:hidden" variant="ghost" builders={[builder]}><Menu /></Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56">
					<DropdownMenu.Item href="/login">Login</DropdownMenu.Item>
					<DropdownMenu.Item href="/register">Register</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{:else}
			<Button class="hidden sm:block" variant="link" href="/publish">Become a Host</Button>
			<Button class="hidden sm:block" variant="link" href="/settings">Settings</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button class="sm:hidden" variant="ghost" builders={[builder]}><Menu /></Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56">
					<DropdownMenu.Item href="/publish">Become a Host</DropdownMenu.Item>
					<DropdownMenu.Item href="/settings">Account Settings</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{/if}
	</div>

	<slot />
</div>
