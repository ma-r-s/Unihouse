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

	let placeholder = today(getLocalTimeZone());
	let years = Array.from({ length: 100 }, (_, index) => new Date().getFullYear() - index);
	let year = { value: placeholder.year, label: placeholder.year, disabled: false };

	$: value = $formData.dob ? parseDate($formData.dob) : undefined;
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
			<Popover.Content class="flex w-auto flex-col items-center p-0" side="top">
				<Select.Root
					bind:selected={year}
					onSelectedChange={(e) => {
						placeholder = new CalendarDate(e.value, placeholder.month, 1);
					}}
				>
					<Select.Trigger class="mt-4 w-40">
						<Select.Value placeholder="Select a year" />
					</Select.Trigger>
					<Select.Content class="h-40 overflow-y-auto [&::-webkit-scrollbar]:hidden">
						<Select.Group>
							<Select.Label>Years</Select.Label>
							{#each years as year}
								<Select.Item value={year} label={year}>{year}</Select.Item>
							{/each}
						</Select.Group>
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
					onPlaceholderChange={(p) => {
						year = { value: p.year, label: p.year, disabled: false };
					}}
				/>
			</Popover.Content>
		</Popover.Root>
		<Form.Description>Your date of birth is used to calculator your age</Form.Description>
		<Form.FieldErrors />
		<input hidden value={$formData.dob} name={attrs.name} />
	</Form.Control>
</Form.Field>
