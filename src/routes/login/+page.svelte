<script>
	import PocketBase from 'pocketbase';

	const pb = new PocketBase('http://localhost:8080');

	async function login(form) {
		try {
			await pb.collection('users').authWithOAuth2({ provider: 'github' });
			form.token.value = pb.authStore.token;
			form.submit();
		} catch (err) {
			console.error(err);
		}
	}
</script>

<form method="post" on:submit|preventDefault={(e) => login(e.currentTarget)}>
	<input name="token" type="hidden" />
	<button class="mt-10 rounded border bg-gray-800 p-2 text-white hover:bg-gray-700">
		Login using Github
	</button>
</form>
