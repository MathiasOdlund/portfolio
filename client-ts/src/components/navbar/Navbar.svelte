<script context="module" lang="ts">
	import { session } from '$app/stores';

	import './navbar.css';

	let inputOpened = false;
	const hasNotification = false;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
</script>

<div class="navbar bg-base-100 shadow-md">
	<div class="navbar-start">
		<div class="dropdown bg-base-100">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
			>
				<li class:active={path === '/home'}><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a href="/" class="btn btn-ghost normal-case text-xl">Logo</a>
	</div>
	<div class="navbar-end">
		<!-- on toggle -->
		{#if inputOpened}
			<div class="form-control mr-1">
				<input
					type="text"
					placeholder="Search"
					class="input bg-base-100 input-bordered "
				/>
			</div>
		{/if}
		<button
			on:click={() => (inputOpened = !inputOpened)}
			class="btn btn-ghost btn-circle"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
		<!-- Visible if loged in -->
		{#if $session.user}
			<button class="btn btn-ghost btn-circle">
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/></svg
					>
					<!-- If the user gets notifications -->
					{#if hasNotification}
						<span class="badge badge-xs badge-primary indicator-item" />
					{/if}
				</div>
			</button>

			<div class="dropdown dropdown-end ">
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img src="https://api.lorem.space/image/face?hash=33791" />
					</div>
				</label>
				<ul
					tabindex="0"
					class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
				>
					<li>
						<a href="/user/profile" class="justify-between">
							Profile
							<span class="badge">New</span>
						</a>
					</li>
					<li><a href="/settings">Settings</a></li>
					<li><a href="/user/logout">Logout</a></li>
				</ul>
			</div>
		{:else}
			<a
				href="/user/register"
				class="btn bg-primary text-accent border-none hover:bg-primary-focus ml-2"
				>Register</a
			>
		{/if}

		<!--  -->
	</div>
</div>

<style>
	li.active {
		font-weight: 700;
	}
</style>
