<script>
	import { Button } from '$lib/components/ui/button';
	import Lang from '~icons/material-symbols/language';
	import { locale } from '$lib/translations';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" size="icon">
			<Lang class="size-4" />
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => ($locale = 'es')}>Español</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => ($locale = 'en')}>English</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
