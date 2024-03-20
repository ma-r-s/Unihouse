<script>
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import Loading from '~icons/material-symbols/progress-activity';
	import { t } from '$lib/translations';

	export let data;

	const form = superForm(data.form, {
		validators: valibotClient(formSchema),
		onUpdated: ({ form: f }) => {
			if (!f.valid) {
				toast.error('Please fix the errors in the form.');
			}
		},
		onError: ({ result }) => {
			toast.error(result.error.message);
		}
	});

	const { form: formData, enhance, delayed } = form;
</script>

<h2 class="mb-4 text-xl font-bold">{$t('login')}</h2>
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

	<Form.Button>
		{#if $delayed}
			<Loading class="size-4 animate-spin" />
		{:else}
			Submit
		{/if}
	</Form.Button>
	<!-- <SuperDebug data={$formData} /> -->
</form>
