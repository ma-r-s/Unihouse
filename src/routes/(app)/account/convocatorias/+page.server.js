import { error } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	try {
		// Fetch the listings owned by the current user
		const posts = await locals.pb.collection('posts').getFullList(undefined);
		const justUser = posts.filter((post) => post.user === locals.user.id);
		console.log('Posts: ', justUser);
		console.log(locals.user.id);
		return { posts: justUser };
	} catch (err) {
		console.log('Error: ', err);
		throw error(500, err.message);
	}
};
