<script>
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { Badge } from '$lib/components/ui/badge';
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
	<Card.Root class="w-80 overflow-hidden">
		<Card.Content>
			<img
				src={getImageURL(post.collectionId, post.id, post.pictures[0])}
				alt={post.name}
				class=""
			/>
		</Card.Content>
		<Card.Header>
			<Card.Title>{post.name}</Card.Title>
			<div class="flex justify-between py-2">
				{post.price.toLocaleString('en-US', { style: 'currency', currency: 'COP' })}
				<Badge>{post.size}</Badge>
			</div>
			<Card.Description class="line-clamp-3 text-pretty">{post.description}</Card.Description>
		</Card.Header>
	</Card.Root>
{/each}
