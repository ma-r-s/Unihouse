<script>
	import * as Form from '$lib/components/ui/form';
	import * as Select from '$lib/components/ui/select';

	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	import { Textarea } from '$lib/components/ui/textarea';
	import { toast } from 'svelte-sonner';
	import Loading from '~icons/material-symbols/progress-activity';
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

	$: selectedSize = $formData.size
		? {
				label: $formData.size,
				value: $formData.size
			}
		: undefined;
	const sizes = [
		{ label: 'Small', value: 'sm' },
		{ label: 'Medium', value: 'md' },
		{ label: 'Large', value: 'lg' },
		{ label: 'X-Large', value: 'xl' }
	];
	let minPrice = 500000;
	let maxPrice = 5000000;
	$formData.price = null;
</script>

<div class="flex w-full flex-col items-center">
	<h2 class="mb-4 w-fit text-xl font-bold">Create House Listing</h2>
	<form
		method="POST"
		class="flex w-full flex-col justify-center gap-4 md:w-1/2"
		use:enhance
		enctype="multipart/form-data"
	>
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
				<Textarea
					{...attrs}
					bind:value={$formData.description}
					placeholder="Enter the description"
				/>
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
				<Input
					{...attrs}
					type="number"
					min={minPrice}
					max={maxPrice}
					step={100000}
					bind:value={$formData.price}
					placeholder="Enter the price"
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="size">
			<Form.Control let:attrs>
				<Form.Label>Size</Form.Label>
				<Select.Root
					selected={selectedSize}
					onSelectedChange={(v) => {
						v && ($formData.size = v.value);
					}}
				>
					<Select.Trigger {...attrs}>
						<Select.Value placeholder="Sizes" />
					</Select.Trigger>
					<Select.Content>
						{#each sizes as size}
							<Select.Item value={size.value} label={size.label} />
						{/each}
					</Select.Content>
				</Select.Root>
				<input hidden bind:value={$formData.size} name={attrs.name} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="pictures">
			<Form.Control let:attrs>
				<Form.Label>Upload Pictures</Form.Label>
				<Input
					type="file"
					multiple
					{...attrs}
					on:input={(e) => ($formData.pictures = Array.from(e.currentTarget.files ?? []))}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<div class="flex flex-wrap gap-4">
			{#each $formData.pictures as picture, index}
				<img
					src={URL.createObjectURL(picture)}
					alt={`Preview ${index + 1}`}
					class="h-32 w-32 object-cover"
				/>
			{/each}
		</div>

		<Form.Button>
			{#if $delayed}
				<Loading class="size-4 animate-spin" />
			{:else}
				Submit
			{/if}
		</Form.Button>
	</form>
</div>
