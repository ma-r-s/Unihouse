<script>
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import CalendarInput from './CalendarInput.svelte';

	export let data;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const formData = form.form;
	const enhance = form.enhance;
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="username" class="mb-4">
		<Form.Control let:attrs>
			<Form.Label>Username</Form.Label>
			<Input {...attrs} bind:value={$formData.username} />
		</Form.Control>
		<Form.Description>This is your public display name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<CalendarInput {form} {formData}></CalendarInput>
	<Form.Button>Submit</Form.Button>
</form>
