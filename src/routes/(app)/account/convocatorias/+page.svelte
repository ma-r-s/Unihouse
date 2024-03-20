<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

	const roommateListings = [
		{
			name: 'Alice Johnson',
			age: 25,
			gender: 'Female',
			occupation: 'Software Engineer',
			preferredLocation: 'Downtown',
			budget: '$1000 - $1200'
		},
		{
			name: 'Bob Smith',
			age: 30,
			gender: 'Male',
			occupation: 'Graphic Designer',
			preferredLocation: 'Suburb',
			budget: '$800 - $1000'
		},
		{
			name: 'Emma Brown',
			age: 28,
			gender: 'Female',
			occupation: 'Teacher',
			preferredLocation: 'City Center',
			budget: '$1200 - $1400'
		},
		{
			name: 'David Lee',
			age: 27,
			gender: 'Male',
			occupation: 'Doctor',
			preferredLocation: 'Waterfront',
			budget: '$1500 - $1800'
		},
		{
			name: 'Grace Taylor',
			age: 29,
			gender: 'Female',
			occupation: 'Marketing Manager',
			preferredLocation: 'Suburb',
			budget: '$900 - $1100'
		}
		// Add more listings as needed
	];
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
