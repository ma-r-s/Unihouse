<script>
	import * as Form from '$lib/components/ui/form';
	import CalendarIcon from 'svelte-radix/Calendar.svelte';
	import {
		DateFormatter,
		getLocalTimeZone,
		parseDate,
		CalendarDate,
		today
	} from '@internationalized/date';
	import { cn } from '$lib/utils';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Popover from '$lib/components/ui/popover';
	import * as Select from '$lib/components/ui/select';
	export let form;
	export let formData;

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let value;
	$: value = $formData.dob ? parseDate($formData.dob) : undefined;

	let placeholder = today(getLocalTimeZone());

	const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);
</script>

<Form.Field {form} name="dob" class="flex flex-col">
	<Form.Control let:attrs>
		<Form.Label>Date of birth</Form.Label>
		<Popover.Root>
			<Popover.Trigger
				{...attrs}
				class={cn(
					buttonVariants({ variant: 'outline' }),
					'w-[280px] justify-start pl-4 text-left font-normal',
					!value && 'text-muted-foreground'
				)}
			>
				{value ? df.format(value.toDate(getLocalTimeZone())) : 'Pick a date'}
				<CalendarIcon class="ml-auto h-4 w-4 opacity-50" />
			</Popover.Trigger>
			<Popover.Content class="w-auto p-0" side="top">
				<Select.Root
					{years}
					onSelectedChange={(v) => {
						if (!v) return;
						value = new CalendarDate(v.value, today(getLocalTimeZone()).month, 1);
					}}
				>
					<Select.Trigger class="w-24">
						<Select.Value placeholder="Select" />
					</Select.Trigger>
					<Select.Content>
						{#each years as year}
							<Select.Item value={year}>{year}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
				<Calendar
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
		<Form.Description>Your date of birth is used to calculate your age.</Form.Description>
		<Form.FieldErrors />
		<input hidden value={$formData.dob} name={attrs.name} />
	</Form.Control>
</Form.Field>
