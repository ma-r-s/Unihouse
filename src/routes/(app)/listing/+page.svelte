<script>
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import Filters from './Filters.svelte';
	const getImageURL = (collectionId, recordId, fileName) => {
		return `https://uni.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}`;
	};

	export let data;

	$: console.log(data.posts);
</script>

<Filters />

<Separator class="my-6" />

{#each data.posts as post}
	<Card.Root class="w-72">
		<Card.Header>
			<img
				src={getImageURL(post.collectionId, post.id, post.pictures[0])}
				alt={post.name}
				class="rounded-lg"
			/>
			<Card.Title>{post.name}</Card.Title>
		</Card.Header>
		<Card.Content class=""></Card.Content>
		<Card.Footer>
			<Card.Description>{post.description}</Card.Description>
		</Card.Footer>
	</Card.Root>
{/each}
