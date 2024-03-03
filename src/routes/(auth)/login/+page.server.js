import { redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { valibot } from 'sveltekit-superforms/adapters';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const form = await superValidate(valibot(formSchema));
	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, valibot(formSchema));
		if (!form.valid) {
			error(400, { message: 'Invalid form data.' });
		}
		try {
			await event.locals.pb
				.collection('users')
				.authWithPassword(form.data.email, form.data.password);
		} catch (e) {
			console.log('Error: ', e);
			error(500, { message: 'The server is not available' });
		}
		redirect(303, '/');
	}
};
