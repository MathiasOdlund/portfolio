<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	};
</script>

<script lang="ts">
	export let title: string;
</script>

<!-- component -->

<div
	class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
>
	<div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
		<div class="relative">
			<div class="mb-4 flex items-center">
				<div class="flex flex-col items-start">
					<h1 class="my-2 text-main font-bold text-2xl">
						Looks like you've found the doorway to the great nothing
					</h1>
					<p class="my-2 text-main">
						Sorry about that! Please visit our hompage to get where you need to
						go.
					</p>
					<a href="/"><button class="btn btn-primary">Take me there!</button></a
					>
					<div class="alert alert-error shadow-lg w-3/4 mt-2 mb-2">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="stroke-current flex-shrink-0 h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
								/></svg
							>
							<span>Error message: {title}</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<img src="https://i.ibb.co/G9DC8S0/404-2.png" />
			</div>
		</div>
	</div>
	<div>
		<img src="https://i.ibb.co/ck1SGFJ/Group.png" />
	</div>
</div>
