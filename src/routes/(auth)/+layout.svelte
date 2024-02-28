<script>
	import Unihouse from '$lib/Unihouse.svelte';
	import Toggle from '$lib/Toggle.svelte';
	import picture from '$lib/assets/images/eje_ambiental.jpg';
</script>

<div class="flex h-screen">
	<div class=" w-full shrink-0 overflow-auto p-10 sm:w-1/4 sm:min-w-[28rem]">
		<div class="mb-6 flex justify-between overflow-auto">
			<Unihouse />
			<Toggle></Toggle>
		</div>
		<slot />
	</div>
	<img alt="The project logo" src={picture} class="h-screen w-full overflow-hidden object-cover" />
</div>
