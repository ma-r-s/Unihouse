import { fail, redirect } from '@sveltejs/kit';
import { superValidate, withFiles } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { valibot } from 'sveltekit-superforms/adapters';
import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		redirect(303, '/login');
	}
	return {
		form: await superValidate(valibot(formSchema))
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, valibot(formSchema));
		console.log(form.data.size);
		if (!form.valid) return fail(400, withFiles({ form }));
		form.data.user = event.locals.user.id;
		try {
			await event.locals.pb.collection('posts').create(form.data);
		} catch (e) {
			console.log('Error: ', e);
			error(500, { message: 'Failed to create listing.' });
		}
		redirect(303, '/');
	}
};
