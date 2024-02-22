<script>
	import { Button } from '$lib/components/ui/button';
	import { toggleMode } from 'mode-watcher';
	import Sun from '~icons/material-symbols/wb-sunny-outline-rounded';
	import Moon from '~icons/material-symbols/dark-mode-outline-rounded';
</script>

<Button on:click={toggleMode} variant="ghost" size="icon">
	<Sun class="h-4 w-4 dark:hidden" />
	<Moon class="hidden h-4 w-4 dark:block" />
	<span class="sr-only">Toggle theme</span>
</Button>
