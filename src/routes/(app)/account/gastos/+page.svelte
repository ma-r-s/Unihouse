<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';

	const expenses = [
		{
			category: 'Rent',
			paymentStatus: 'Paid',
			totalAmount: '$1200.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			category: 'Electricity',
			paymentStatus: 'Pending',
			totalAmount: '$80.00',
			paymentMethod: 'Direct Debit'
		},
		{
			category: 'Internet',
			paymentStatus: 'Unpaid',
			totalAmount: '$50.00',
			paymentMethod: 'Credit Card'
		},
		{
			category: 'Water',
			paymentStatus: 'Paid',
			totalAmount: '$40.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			category: 'Maintenance',
			paymentStatus: 'Paid',
			totalAmount: '$100.00',
			paymentMethod: 'Cash'
		},
		{
			category: 'Insurance',
			paymentStatus: 'Pending',
			totalAmount: '$150.00',
			paymentMethod: 'Bank Transfer'
		},
		{
			category: 'Cleaning',
			paymentStatus: 'Unpaid',
			totalAmount: '$60.00',
			paymentMethod: 'Credit Card'
		}
	];
</script>

<div class="w-full">
	<div class="mb-6 text-2xl font-bold">Costs Management</div>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Category</Table.Head>
				<Table.Head>Status</Table.Head>
				<Table.Head>Method</Table.Head>
				<Table.Head class="text-right">Amount</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each expenses as expense, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{expense.category}</Table.Cell>
					<Table.Cell>{expense.paymentStatus}</Table.Cell>
					<Table.Cell>{expense.paymentMethod}</Table.Cell>
					<Table.Cell class="text-right">{expense.totalAmount}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
		<Table.Caption class="mb-6">A list of your recent apartment expenses.</Table.Caption>
	</Table.Root>
</div>
