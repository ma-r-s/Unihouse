<script>
	import * as Form from '$lib/components/ui/form';
	import * as Select from '$lib/components/ui/select';

	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data;

	const form = superForm(data.form, {
		validators: zodClient(formSchema)
	});
	const { form: formData, enhance } = form;
	const sizes = [
		{ label: 'Small', value: 'sm' },
		{ label: 'Medium', value: 'md' },
		{ label: 'Large', value: 'lg' },
		{ label: 'X-Large', value: 'xl' }
	];
</script>

<h2 class="mb-4 text-xl font-bold">Create House Listing</h2>

<form method="POST" class="flex flex-col gap-4" use:enhance enctype="multipart/form-data">
	<Form.Field {form} name="name">
		<Form.Control let:attrs>
			<Form.Label>Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} placeholder="Enter the name" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="description">
		<Form.Control let:attrs>
			<Form.Label>Description</Form.Label>
			<Input {...attrs} bind:value={$formData.description} placeholder="Enter the description" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="address">
		<Form.Control let:attrs>
			<Form.Label>Address</Form.Label>
			<Input {...attrs} bind:value={$formData.address} placeholder="Enter the address" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="price">
		<Form.Control let:attrs>
			<Form.Label>Price</Form.Label>
			<Input {...attrs} type="number" bind:value={$formData.price} placeholder="Enter the price" />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="size">
		<Form.Control let:attrs>
			<Form.Label>Size</Form.Label>
			<Select.Root bind:selected={$formData.size}>
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Sizes" />
				</Select.Trigger>
				<Select.Content>
					{#each sizes as size}
						<Select.Item value={size.value}>{size.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="pictures">
		<Form.Control let:attrs>
			<Form.Label>Upload Pictures</Form.Label>
			<Input
				{...attrs}
				on:input={(e) => ($formData.pictures = e.currentTarget.files ?? null)}
				type="file"
				multiple
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button>Submit</Form.Button>
</form>
