<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

	// Export the data received from the `load` function
	export let data;

	// Assign the received posts to a reactive variable
	let roommateListings = data.posts;
</script>

<div class="w-full">
	<div class="mb-6 text-2xl font-bold">Listings</div>
	<Table.Root>
		<Table.Caption>List of your property listings</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head>Name</Table.Head>
				<Table.Head>Description</Table.Head>
				<Table.Head>Address</Table.Head>
				<Table.Head>Price</Table.Head>
				<Table.Head>Created Date</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each roommateListings as listing, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{listing.name}</Table.Cell>
					<Table.Cell>{listing.description}</Table.Cell>
					<Table.Cell>{listing.address}</Table.Cell>
					<Table.Cell>{listing.price}</Table.Cell>
					<Table.Cell>{new Date(listing.created).toLocaleDateString()}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
