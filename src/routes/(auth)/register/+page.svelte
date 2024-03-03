<script>
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema.js';
	import { superForm } from 'sveltekit-superforms';
	import { valibotClient } from 'sveltekit-superforms/adapters';
	// import SuperDebug from 'sveltekit-superforms';
	import { cn } from '$lib/utils';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import CalendarIcon from '~icons/material-symbols/calendar-today-outline-rounded';
	import CalendarMonthYear from '$lib/CalendarMonthYear.svelte';
	import {
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		CalendarDate,
		today
	} from '@internationalized/date';
	export let data;

	const form = superForm(data.form, {
		validators: valibotClient(formSchema)
	});

	const { form: formData, enhance } = form;
	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let value;

	$: value = $formData.dob ? parseDate($formData.dob) : undefined;

	let placeholder = today(getLocalTimeZone());
</script>

<h2 class="mb-4 text-xl font-bold">Sign Up</h2>
<p class="mb-6">
	Or
	<a href="/login" class="underline">log in</a>
	if you alredy have an account.
</p>
<form method="POST" class="flex flex-col gap-4" use:enhance>
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

	<Form.Field {form} name="dob" class="flex flex-col">
		<Form.Control let:attrs>
			<Form.Label>Date of birth</Form.Label>
			<Popover.Root>
				<Popover.Trigger
					{...attrs}
					class={cn(
						buttonVariants({ variant: 'outline' }),
						' justify-start pl-4 text-left font-normal',
						!value && 'text-muted-foreground'
					)}
				>
					{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
					<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
				</Popover.Trigger>
				<Popover.Content class="w-auto p-0" side="top">
					<CalendarMonthYear
						{value}
						bind:placeholder
						minValue={new CalendarDate(1900, 1, 1)}
						maxValue={today(getLocalTimeZone())}
						calendarLabel="Date of birth"
						initialFocus
						onValueChange={(v) => {
							if (v) {
								$formData.dob = v.toString();
							} else {
								$formData.dob = '';
							}
						}}
					/>
				</Popover.Content>
			</Popover.Root>
			<Form.Description>Your date of birth is used to calculator your age</Form.Description>
			<Form.FieldErrors />
			<input hidden value={$formData.dob} name={attrs.name} />
		</Form.Control>
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
