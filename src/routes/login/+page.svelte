<script>
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	// import SuperDebug from 'sveltekit-superforms';
	export let data;

	const form = superForm(data.form, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" class="flex flex-col gap-4 sm:w-96" use:enhance>
	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input {...attrs} bind:value={$formData.email} placeholder="Enter your email" />
		</Form.Control>
		<!-- <Form.Description>We will email you to verify your account.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>

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

	<Form.Button>Submit</Form.Button>
	<!-- <SuperDebug data={$formData} /> -->
</form>
