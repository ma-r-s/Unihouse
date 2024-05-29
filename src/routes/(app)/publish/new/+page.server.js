import { redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
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
		if (!form.valid) error(400, { message: 'Invalid form data.' });
		form.data.user = event.locals.user.id;
		try {
			await event.locals.pb.collection('posts').create(form.data);
		} catch (e) {
			console.log('Error: ', e);
			error(500, {
				message: 'Server error on ' + Object.keys(e.response.data).join(', ')
			});
		}
		redirect(303, '/');
	}
};
