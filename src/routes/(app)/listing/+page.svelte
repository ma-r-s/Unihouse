<script>
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { Badge } from '$lib/components/ui/badge';
	import Filters from './Filters.svelte';
	const getImageURL = (collectionId, recordId, fileName) => {
		return `https://uni.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}`;
	};

	export let data;
</script>

<Filters />

<Separator class="my-6" />

<div class="grid w-full grid-cols-1 justify-between gap-4 px-6 md:grid-cols-2 xl:grid-cols-3">
	{#each data.posts as post}
		<Card.Root class="grow overflow-hidden">
			<Card.Content>
				<img
					src={getImageURL(post.collectionId, post.id, post.pictures[0])}
					alt={post.name}
					class="h-60 w-full overflow-hidden object-cover"
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
</div>
