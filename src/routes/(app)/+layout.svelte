<script>
	import Toggle from '$lib/Toggle.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Unihouse from '$lib/Unihouse.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Menu from '~icons/material-symbols/menu-rounded';
	import Account from '~icons/material-symbols/account-circle-full';
	export let data;
</script>

<div class="container py-10">
	<div class="mb-6 flex gap-4">
		<Unihouse />
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
			<Button class="hidden sm:block" variant="link" href="/publish">Host</Button>
			<Button class="hidden sm:block" variant="link" href="/logout">Log Out</Button>
			<Button class="hidden sm:flex " variant="ghost" size="icon" href="/account">
				<Account class="h-4 w-4" />
			</Button>
			<Toggle />
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button class="sm:hidden" size="icon" variant="ghost" builders={[builder]}
						><Menu /></Button
					>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56">
					<DropdownMenu.Item href="/publish">Host</DropdownMenu.Item>
					<DropdownMenu.Item href="/account">Account</DropdownMenu.Item>
					<DropdownMenu.Item href="/logout">Log Out</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{/if}
	</div>

	<slot />
</div>
