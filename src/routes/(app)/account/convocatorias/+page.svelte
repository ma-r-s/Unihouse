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
		<Table.Caption>List of people looking for roommates</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head>Name</Table.Head>
				<Table.Head>Age</Table.Head>
				<Table.Head>Gender</Table.Head>
				<Table.Head>Occupation</Table.Head>
				<Table.Head>Preferred Location</Table.Head>
				<Table.Head>Budget</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each roommateListings as listing, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{listing.name}</Table.Cell>
					<Table.Cell>{listing.age}</Table.Cell>
					<Table.Cell>{listing.gender}</Table.Cell>
					<Table.Cell>{listing.occupation}</Table.Cell>
					<Table.Cell>{listing.preferredLocation}</Table.Cell>
					<Table.Cell>{listing.budget}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
