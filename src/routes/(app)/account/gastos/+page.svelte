<script lang="ts">
	import { onMount } from 'svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import { writable } from 'svelte/store';

	const initialExpenses = [
		{
			category: 'Rent',
			paymentStatus: 'Paid',
			totalAmount: 1200.0,
			paymentMethod: 'Bank Transfer'
		},
		{
			category: 'Electricity',
			paymentStatus: 'Pending',
			totalAmount: 80.0,
			paymentMethod: 'Direct Debit'
		},
		{
			category: 'Internet',
			paymentStatus: 'Unpaid',
			totalAmount: 50.0,
			paymentMethod: 'Credit Card'
		},
		{
			category: 'Water',
			paymentStatus: 'Paid',
			totalAmount: 40.0,
			paymentMethod: 'Bank Transfer'
		},
		{
			category: 'Maintenance',
			paymentStatus: 'Paid',
			totalAmount: 100.0,
			paymentMethod: 'Cash'
		},
		{
			category: 'Insurance',
			paymentStatus: 'Pending',
			totalAmount: 150.0,
			paymentMethod: 'Bank Transfer'
		},
		{
			category: 'Cleaning',
			paymentStatus: 'Unpaid',
			totalAmount: 60.0,
			paymentMethod: 'Credit Card'
		}
	];

	const expenses = writable(initialExpenses);
	let filterStatus = '';
	let newExpense = {
		category: '',
		paymentStatus: 'Unpaid',
		totalAmount: '0.00',
		paymentMethod: 'Credit Card'
	};

	// Reactive statement to filter expenses based on filterStatus
	let filteredExpenses;
	$: filteredExpenses = filterStatus
		? $expenses.filter((expense) => expense.paymentStatus === filterStatus)
		: $expenses;

	function calculateTotal(expenses) {
		return expenses.reduce((total, expense) => total + expense.totalAmount, 0).toFixed(2);
	}

	function addExpense() {
		expenses.update((currentExpenses) => [
			...currentExpenses,
			{ ...newExpense, totalAmount: parseFloat(newExpense.totalAmount) }
		]);
		// Reset the form fields
		newExpense = {
			category: '',
			paymentStatus: 'Unpaid',
			totalAmount: '0.00',
			paymentMethod: 'Credit Card'
		};
	}
</script>

<div class="w-full">
	<div class="mb-6 text-2xl font-bold">Costs Management</div>

	<div class="filter-buttons">
		<button
			on:click={() => {
				filterStatus = '';
			}}
			class="btn">All</button
		>
		<button
			on:click={() => {
				filterStatus = 'Paid';
			}}
			class="btn">Paid</button
		>
		<button
			on:click={() => {
				filterStatus = 'Pending';
			}}
			class="btn">Pending</button
		>
		<button
			on:click={() => {
				filterStatus = 'Unpaid';
			}}
			class="btn">Unpaid</button
		>
	</div>

	<div class="add-expense-form">
		<input type="text" placeholder="Category" bind:value={newExpense.category} />
		<select bind:value={newExpense.paymentStatus}>
			<option value="Paid">Paid</option>
			<option value="Pending">Pending</option>
			<option value="Unpaid">Unpaid</option>
		</select>
		<input type="number" step="0.01" placeholder="Amount" bind:value={newExpense.totalAmount} />
		<select bind:value={newExpense.paymentMethod}>
			<option value="Bank Transfer">Bank Transfer</option>
			<option value="Direct Debit">Direct Debit</option>
			<option value="Credit Card">Credit Card</option>
			<option value="Cash">Cash</option>
		</select>
		<button on:click={addExpense} class="btn">Add Expense</button>
	</div>

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
			{#each filteredExpenses as expense, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{expense.category}</Table.Cell>
					<Table.Cell>{expense.paymentStatus}</Table.Cell>
					<Table.Cell>{expense.paymentMethod}</Table.Cell>
					<Table.Cell class="text-right">${expense.totalAmount.toFixed(2)}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
		<Table.Caption class="mb-6">A list of your recent apartment expenses.</Table.Caption>
	</Table.Root>

	<div class="mt-4 text-right">
		<strong>Total: ${calculateTotal(filteredExpenses)}</strong>
	</div>
</div>

<style>
	.filter-buttons,
	.add-expense-form {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	.add-expense-form input,
	.add-expense-form select {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	.btn {
		padding: 0.5rem 1rem;
		background-color: #000000;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.btn:hover {
		background-color: #000000;
	}
</style>
