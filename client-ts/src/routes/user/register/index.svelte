<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
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
	import { send } from '$lib/api';
	export let error: string;
	export let success: string;

	async function register(event: SubmitEvent) {
		error = '';
		const formEl = event.target as HTMLFormElement;
		const response = await send(formEl);
		if (response.error) {
			error = response.error;
		}
		if (response.success) {
			success = response.success;
			window.location.href = '/user/login';
		}
		formEl.reset();
	}
</script>

<head>
	<title> Register </title>
</head>
<div class="hero min-h-96   mt-12 ">
	<div class="hero-content flex-col lg:flex-col w-full">
		<div class="card flex-shrink-0 w-full max-w-sm  bg-base-200">
			<div class="text-center w-full  flex justify-center lg:text-left mb-4">
				<h1 class="text-5xl pt-10 font-bold">Register</h1>
			</div>
			<div class="card-body">
				<form on:submit|preventDefault={register} method="post">
					<div class="form-control">
						<label for="email" class="label">
							<span class="label-text">Email</span>
						</label>
						<input
							id="email"
							name="email"
							placeholder="Email..."
							type="text"
							required
							class="input input-bordered"
						/>
					</div>

					<div class="form-control">
						<label for="username" class="label">
							<span class="label-text">Username</span>
						</label>
						<input
							id="username"
							name="username"
							placeholder="Username..."
							type="text"
							required
							class="input input-bordered"
						/>
					</div>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Password</span>
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
					<div class="form-control mt-4">
						<button type="submit" class="btn btn-primary">Register</button>
					</div>
					<div class="mt-2">
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
						{#if success}
							<div class="alert alert-success shadow-lg">
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
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/></svg
									>
									<span>Your account has been craeted</span>
								</div>
							</div>
						{/if}
					</div>
				</form>
				<label class="label">
					<a href="/user/login" class="label-text-alt link link-hover"
						>Already have an account?</a
					>
				</label>
			</div>
		</div>
	</div>
</div>
