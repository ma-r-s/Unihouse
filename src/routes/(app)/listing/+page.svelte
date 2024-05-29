<script>
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { Badge } from '$lib/components/ui/badge';
	import Filters from './Filters.svelte';
	import * as Form from '$lib/components/ui/form';
	import Button from '$lib/components/ui/button/button.svelte';
	import { enhance } from '$app/forms';
	const getImageURL = (collectionId, recordId, fileName) => {
		return `https://uni.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}`;
	};

	let size = { value: '' };
	let price = [0.5, 5];
	let distance = [10];
	export let data;
</script>

<Filters bind:size bind:price bind:distance />
<Separator class="my-6" />

<div class="grid w-full grid-cols-1 justify-between gap-4 px-6 md:grid-cols-2 xl:grid-cols-3">
	{#each data.posts as post}
		{#if size.value == '' || size.value === post.size}
			{#if post.price >= price[0] * 1000000 && post.price <= price[1] * 1000000}
				<!-- <a href="/listing/{post.id}"> -->
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
							<!-- Esto no es correcto -->
							<Badge>{post.size}</Badge>
							{#if data.user.username == 'm.ruizs'}
								<form method="POST" action="?/deletePost" use:enhance>
									<input type="hidden" name="id" value={post.id} />
									<Form.Button formaction="?/deletePost" variant="outline">Delete</Form.Button>
								</form>
							{/if}
						</div>
						<Card.Description class="line-clamp-3 text-pretty">{post.description}</Card.Description>
					</Card.Header>
				</Card.Root>
				<!-- </a> -->
			{/if}
		{/if}
	{/each}
</div>
