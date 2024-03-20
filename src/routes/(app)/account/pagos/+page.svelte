<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

	const payments = [
		{
			date: '2024-01-05',
			amount: '$1500.00',
			description: 'Rent payment for January'
		},
		{
			date: '2024-02-05',
			amount: '$1500.00',
			description: 'Rent payment for February'
		},
		{
			date: '2024-03-05',
			amount: '$1500.00',
			description: 'Rent payment for March'
		},
		{
			date: '2024-04-05',
			amount: '$1500.00',
			description: 'Rent payment for April'
		}
	];
</script>

<div class="w-full">
	<div class="mb-6 text-2xl font-bold">Payments</div>
	<Table.Root>
		<Table.Caption>List of payments</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head>Date</Table.Head>
				<Table.Head>Amount</Table.Head>
				<Table.Head>Description</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each payments as payment, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{payment.date}</Table.Cell>
					<Table.Cell>{payment.amount}</Table.Cell>
					<Table.Cell>{payment.description}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
