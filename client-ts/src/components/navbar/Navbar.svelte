<script context="module" lang="ts">
	import './navbar.css';
</script>

<script lang="ts">
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
</script>

<div
	class=" bg-base-100 shadow-md p-2 md:p-4 sm:p-2 flex flex-col md:flex-row sm:flex-row mx-auto justify-center items-center   z-50  w-full"
>
	<div
		class="flex-1  pt-2 md:pt-0 sm:pt-2 w-full md:w-auto sm:w-full ml-0 md:ml-12 sm:ml-0"
	>
		<div
			class="parent flex flex-col items-center md:items-start sm:items-center   "
		>
			<a href="/" class=" normal-case text-[#ffffff] text-xl ">Mathias Ödlund</a
			>
		</div>
	</div>
	<div
		class="flex pb-2 md:pb-0 sm:pb-2 w-full md:w-auto sm:w-full justify-around"
	>
		<ul class="menu menu-horizontal gap-2 p-0 capitalize">
			<li><a href="/services">Services</a></li>

			<li><a href="/projects">Projects</a></li>
			<li>
				<a href="/contact" class="btn btn-outline btn-primary text-base-100"
					>Contact</a
				>
			</li>
		</ul>
	</div>
</div>

<style>
</style>
