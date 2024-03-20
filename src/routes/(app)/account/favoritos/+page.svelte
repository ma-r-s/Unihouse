<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

	const favoriteApartments = [
		{
			name: 'Cozy Loft',
			size: '800 sq ft',
			location: 'Downtown',
			rooms: 2
		},
		{
			name: 'Modern Apartment',
			size: '1200 sq ft',
			location: 'Suburb',
			rooms: 3
		},
		{
			name: 'Luxury Condo',
			size: '1500 sq ft',
			location: 'Waterfront',
			rooms: 4
		},
		{
			name: 'Spacious Penthouse',
			size: '2000 sq ft',
			location: 'City Center',
			rooms: 5
		}
	];
</script>

<div class="w-full">
	<div class="mb-6 text-2xl font-bold">Favorites</div>
	<Table.Root>
		<Table.Caption>List of favorite apartments seen</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head>Name</Table.Head>
				<Table.Head>Size</Table.Head>
				<Table.Head>Location</Table.Head>
				<Table.Head>Rooms</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each favoriteApartments as apartment, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{apartment.name}</Table.Cell>
					<Table.Cell>{apartment.size}</Table.Cell>
					<Table.Cell>{apartment.location}</Table.Cell>
					<Table.Cell>{apartment.rooms}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
