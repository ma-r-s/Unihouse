<script>
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	// import SuperDebug from 'sveltekit-superforms';
	import CalendarInput from './CalendarInput.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox';
	export let data;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="flex flex-col gap-4 sm:w-96" use:enhance>
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} placeholder="Enter your name" />
		</Form.Control>
		<!-- <Form.Description>This is your full name.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input {...attrs} bind:value={$formData.email} placeholder="Enter your email" />
		</Form.Control>
		<!-- <Form.Description>We will email you to verify your account.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="username">
		<Form.Control let:attrs>
			<Form.Label>Username</Form.Label>
			<Input {...attrs} bind:value={$formData.username} placeholder="Choose a unique username" />
		</Form.Control>
		<!-- <Form.Description>This is your public display name.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>
	<CalendarInput {form} {formData}></CalendarInput>

	<Form.Field {form} name="password">
		<Form.Control let:attrs>
			<Form.Label>Password</Form.Label>
			<Input
				{...attrs}
				bind:value={$formData.password}
				type="password"
				placeholder="Enter your password"
			/>
		</Form.Control>
		<!-- <Form.Description>Choose a strong password.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="passwordConfirm">
		<Form.Control let:attrs>
			<Form.Label>Confirm Password</Form.Label>
			<Input
				{...attrs}
				bind:value={$formData.passwordConfirm}
				type="password"
				placeholder="Confirm your password"
			/>
		</Form.Control>
		<!-- <Form.Description>Confirm your password.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field
		{form}
		name="terms"
		class="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
	>
		<Form.Control let:attrs>
			<Checkbox {...attrs} bind:checked={$formData.terms} />
			<div class="space-y-1 leading-none">
				<Form.Label>Accept terms and conditions</Form.Label>
				<Form.Description>
					You can change your mind at any time by visiting your account settings.
				</Form.Description>
			</div>
			<input name={attrs.name} value={$formData.mobile} hidden />
		</Form.Control>
	</Form.Field>
	<Form.Button>Submit</Form.Button>
	<!-- <SuperDebug data={$formData} /> -->
</form>
