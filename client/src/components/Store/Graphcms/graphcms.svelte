<script context="module">
	import { gql, GraphQLClient } from 'graphql-request';

	export async function load() {
		const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL, {
			headers: {}
		});

		const query = gql`
			query ProductsIndex {
				products {
					name
					slug
					price
					images {
						url
					}
				}
			}
		`;

		const { products } = await graphcms.request(query);

		return {
			props: {
				products
			}
		};
	}
</script>

<script lang="ts">
	import { prod } from '$app/env';
	export let user;
	export let products: any;
</script>

<div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
		Customers also purchased
	</h2>

	<div
		class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
	>
		{#each products as product}
			<div class="group relative">
				<div
					class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
				>
					<img
						src={product.images[0].url}
						alt={product.name}
						class="w-full h-full object-center object-cover lg:w-full lg:h-full"
					/>
				</div>
				<div class="mt-4 flex justify-between">
					<div>
						<h3 class="text-sm text-gray-700">
							<a href="/product/{product.slug}">
								<span aria-hidden="true" class="absolute inset-0" />
								{product.name}
							</a>
						</h3>
						{#if product.inStock == true}
							<p class="mt-1 text-sm text-gray-500">In stock</p>
						{:else}
							<p class="mt-1 text-sm text-gray-500">Not in stock</p>
						{/if}
					</div>
					<p class="text-sm font-medium text-gray-900">${product.price}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
