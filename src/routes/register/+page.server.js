import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { error } from '@sveltejs/kit';
export const load = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions = {
	default: async (event) => {
		console.log(event);
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			await event.locals.pb.collection('users').create(form.data);
			await event.locals.pb.collection('users').requestVerification(form.data.email);
		} catch (e) {
			console.log('Error: ', e);
			error(500, { message: 'Failed to create user.' });
		}
		redirect(303, '/');
	}
};
