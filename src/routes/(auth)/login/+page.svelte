<script>
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	// import SuperDebug from 'sveltekit-superforms';
	export let data;

	const form = superForm(data.form, {
		validators: valibotClient(formSchema),
		abortPipeEarly: true
	});

	const { form: formData, enhance } = form;
</script>

<h2 class="mb-4 text-xl font-bold">Log In</h2>
<p class="mb-6">
	Or
	<a href="/register" class="underline">sign up</a>
	if you don't have an account yet.
</p>
<form method="POST" class="flex flex-col gap-4" use:enhance>
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
