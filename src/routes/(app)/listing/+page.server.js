import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	try {
		return { posts: await locals.pb.collection('posts').getFullList(undefined) };
	} catch (err) {
		console.log('Error: ', err);
		throw error(500, err.message);
	}
};

export const actions = {
	deletePost: async ({ request, locals }) => {
		try {
			console.log('Deleting post...');
			const data = await request.formData();
			const id = data.get('id');

			// if (!id) {
			// 	return fail(400, { missing: true, message: 'Post ID is required.' });
			// }

			// Perform the deletion operation using your backend logic
			await locals.pb.collection('posts').delete(id);

			return { success: true };
		} catch (e) {
			console.error('Error deleting post:', e);
			// return fail(500, { message: 'Error deleting post' });
		}
	}
};
