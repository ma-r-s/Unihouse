<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

	const contracts = [
		{
			tenant: 'John Doe',
			startDate: '2024-01-15',
			endDate: '2025-01-14',
			rentAmount: '$1500.00',
			deposit: '$2000.00'
		},
		{
			tenant: 'Alice Smith',
			startDate: '2024-02-20',
			endDate: '2025-02-19',
			rentAmount: '$1800.00',
			deposit: '$2500.00'
		},
		{
			tenant: 'Bob Johnson',
			startDate: '2024-03-10',
			endDate: '2025-03-09',
			rentAmount: '$1700.00',
			deposit: '$2200.00'
		},
		{
			tenant: 'Emma Brown',
			startDate: '2024-04-05',
			endDate: '2025-04-04',
			rentAmount: '$1600.00',
			deposit: '$2300.00'
		}
	];
</script>

<div class="w-full">
	<div class="mb-6 text-2xl font-bold">Contracts</div>
	<Table.Root>
		<Table.Caption>List of current contracts</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head>Tenant</Table.Head>
				<Table.Head>Start Date</Table.Head>
				<Table.Head>End Date</Table.Head>
				<Table.Head>Rent Amount</Table.Head>
				<Table.Head>Deposit</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each contracts as contract, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{contract.tenant}</Table.Cell>
					<Table.Cell>{contract.startDate}</Table.Cell>
					<Table.Cell>{contract.endDate}</Table.Cell>
					<Table.Cell>{contract.rentAmount}</Table.Cell>
					<Table.Cell>{contract.deposit}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
