import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	try {
		return { posts: await locals.pb.collection('posts').getFullList(undefined) };
	} catch (err) {
		console.log('Error: ', err);
		throw error(500, err.message);
	}
};
