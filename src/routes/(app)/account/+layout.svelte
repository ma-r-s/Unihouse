<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="flex gap-20">
	<div class=" flex flex-col items-start">
		<Button href="/account/convocatorias" variant="link">Listings</Button>
		<Button href="/account/gastos" variant="link">Costs Management</Button>
		<Button href="/account/favoritos" variant="link">Favorites</Button>
		<Button href="/account/contratos" variant="link">Contracts</Button>
		<Button href="/account/pagos" variant="link">Payments</Button>
	</div>
	<slot />
</div>
