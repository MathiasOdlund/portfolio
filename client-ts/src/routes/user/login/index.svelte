<script context="module" lang="ts">
	export const load: Load = ({ session, props }) => {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}
		return { props };
	};
</script>

<script lang="ts">
	import { session } from '$app/stores';
	import { send } from '$lib/api';
	import type { Load } from '@sveltejs/kit';

	export let error: string;

	async function login(event: SubmitEvent) {
		const formEl = event.target as HTMLFormElement;
		const response = await send(formEl);

		if (response.error) {
			error = response.error;
		}

		$session.user = response.user;

		formEl.reset();
	}
</script>

<head>
	<title> Login </title>
</head>

<div class="hero min-h-96 mx-auto   mt-12 ">
	<div class="hero-content flex-col lg:flex-col w-full">
		<div class="card flex-shrink-0 w-full max-w-sm bg-base-200">
			<div class="text-center w-full  flex justify-center lg:text-left mb-4">
				<h1 class="text-5xl pt-10 font-bold">Login</h1>
			</div>
			<div class="card-body">
				<form on:submit|preventDefault={login} autocomplete="off" method="post">
					<div class="form-control">
						<label class="label">
							<span class="label-text">Username</span>
						</label>
						<input
							id="username"
							name="username"
							type="text"
							required
							placeholder="Username..."
							class="input input-bordered "
						/>
					</div>
					<div class="form-control">
						<label class="label">
							<span for="password" class="label-text">Password</span>
						</label>
						<input
							id="password"
							name="password"
							placeholder="Password..."
							type="password"
							required
							class="input input-bordered"
						/>
					</div>
					<label class="label">
						<a href="/user/forgot_password" class="label-text-alt link link-hover"
							>Forgot password?</a
						>
					</label>

					<div class="form-control mt-2">
						<button type="submit" class="btn btn-primary">Login</button>
					</div>
				</form>
				{#if error}
					<div class="alert alert-error shadow-lg">
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
							<span>Error! {error}</span>
						</div>
					</div>
				{/if}

				<label class="label">
					<a href="/user/register" class="label-text-alt link link-hover">Don't have an account?</a>
				</label>
			</div>
		</div>
	</div>
</div>
