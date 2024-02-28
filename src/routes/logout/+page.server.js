import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	locals.user = undefined;
	locals.pb.authStore.clear();
	redirect(303, '/login');
}
