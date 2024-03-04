<script>
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	inject();
	injectSpeedInsights();
</script>

<ModeWatcher />
<Toaster />
<slot />
