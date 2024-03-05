<script>
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { Badge } from '$lib/components/ui/badge';
	import Filters from './Filters.svelte';
	const getImageURL = (collectionId, recordId, fileName) => {
		return `https://uni.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}`;
	};

	let size = '';
	let price = [0.5, 5];
	let distance = [10];

	export let data;
</script>

<Filters bind:size bind:price bind:distance />
<Separator class="my-6" />

<div class="grid w-full grid-cols-1 justify-between gap-4 px-6 md:grid-cols-2 xl:grid-cols-3">
	{#each data.posts as post}
		{#if size === '' || size.value === post.size}
			{#if post.price >= price[0] * 1000000 && post.price <= price[1] * 1000000}
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
			{/if}
		{/if}
	{/each}
</div>
