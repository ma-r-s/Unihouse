import { fail, redirect } from '@sveltejs/kit';
import { superValidate, withFiles } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		redirect(303, '/login');
	}
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) return fail(400, withFiles({ form }));
		form.data.user = event.locals.user.id;
		try {
			console.log('Intentando crear publicacion...');

			await event.locals.pb.collection('posts').create(form.data);
			console.log('Publicacion creada');
		} catch (e) {
			console.log('Error: ', e);
			error(500, { message: 'Failed to create listing.' });
		}
		redirect(303, '/');
	}
};
