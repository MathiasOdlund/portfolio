<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ session }) => {
		if (!session.user) {
			return {
				status: 302,
				redirect: '/user/login'
			};
		}

		return {
			status: 200,
			props: {
				user: session.user
			}
		};
	};
</script>

<script lang="ts">
	export let user: any;
	let postAmount: any[] = [
		{
			title: 'Branch Colon',
			company: 'MANTRO',
			description:
				'Veniam occaecat irure reprehenderit incididunt fugiat cupidatat aliqua elit aliqua sint ipsum magna. Aute officia incididunt sit commodo pariatur fugiat deserunt nisi Lorem do do do et velit. Fugiat sunt proident magna consectetur nulla qui. Aute consequat aliquip commodo ullamco ullamco adipisicing Lorem duis aute ad dolore dolore commodo nisi.\r\n',
			tags: ['irure', 'aliquip', 'anim', 'occaecat', 'ad', 'sit', 'ea']
		},
		{
			title: 'Barnett Curtis',
			company: 'NIMON',
			description:
				'Dolor fugiat ut ullamco esse fugiat exercitation adipisicing ipsum. Adipisicing consequat exercitation in nostrud commodo qui. Consequat incididunt culpa qui pariatur do nostrud aute adipisicing magna aliqua nulla pariatur. Enim velit deserunt sint reprehenderit esse. In ex occaecat non deserunt in tempor veniam eu ex eu laborum in in quis. Deserunt amet est do dolore Lorem eu duis cupidatat velit veniam sit.\r\n',
			tags: ['ea', 'laborum', 'cillum', 'do', 'Lorem', 'consectetur', 'ea']
		},
		{
			title: 'Annette Newton',
			company: 'ROCKYARD',
			description:
				'Esse do laboris in exercitation irure nisi fugiat ex reprehenderit. Ad reprehenderit elit non fugiat duis fugiat id culpa nulla Lorem excepteur sunt elit veniam. Duis ullamco veniam eu cupidatat. Sunt qui minim laboris cupidatat deserunt elit dolor laboris do exercitation. Veniam cupidatat proident eu aliquip consequat esse. Amet excepteur tempor proident id eiusmod quis ullamco ut.\r\n',
			tags: ['sit', 'eu', 'ex', 'sunt', 'minim', 'voluptate', 'sunt']
		},
		{
			title: 'Sheila Cook',
			company: 'UBERLUX',
			description:
				'Nisi cupidatat officia Lorem non. Eiusmod excepteur eu dolor minim non elit id ut amet. Culpa minim mollit ex nostrud aliqua Lorem laboris.\r\n',
			tags: [
				'eiusmod',
				'qui',
				'voluptate',
				'proident',
				'eiusmod',
				'cillum',
				'sit'
			]
		},
		{
			title: 'Ramos Bates',
			company: 'DRAGBOT',
			description:
				'Eiusmod ex anim eu ea duis esse dolor nisi cupidatat adipisicing mollit et aliqua. Dolore et in tempor in incididunt sint tempor culpa eu velit. Proident est in aliqua nisi ut culpa nulla anim nulla ea voluptate elit sint. Ipsum cillum amet adipisicing aliquip culpa minim irure ullamco qui labore nulla. Nostrud excepteur magna dolor ea in mollit id duis. Proident nisi et cupidatat esse sunt qui fugiat eiusmod sint ea elit duis aliquip anim. Adipisicing elit ad aute ullamco officia adipisicing consectetur consequat et mollit cupidatat pariatur.\r\n',
			tags: [
				'occaecat',
				'laborum',
				'occaecat',
				'proident',
				'excepteur',
				'esse',
				'elit'
			]
		},
		{
			title: 'Gladys Allen',
			company: 'WAAB',
			description:
				'Consequat qui reprehenderit et qui eiusmod qui mollit veniam enim deserunt sunt officia ipsum. Incididunt sint id aliquip occaecat nulla excepteur. Elit incididunt exercitation et est. Consectetur velit culpa labore ullamco non sit Lorem eiusmod duis.\r\n',
			tags: ['irure', 'officia', 'id', 'labore', 'fugiat', 'do', 'aute']
		}
	];
</script>

<head><title>Profile - {user.username} </title></head>
<div class="flex flex-col md:flex-row sm:flex-col w-10/12 mx-auto  h-screen">
	<div class="left p-2   w-full lg:w-1/4 md:w-2/4 sm:w-full ">
		<div
			class="container flex flex-col items-center md:items-start sm:items-center info bg-base-200 rounded-md  p-4  "
		>
			<img
				class="w-full h-96 object-cover rounded-sm"
				src="https://api.lorem.space/image/face?hash=33791"
			/>
			<h1 class="font-semibold text-2xl capitalize mt-2">{user.username}</h1>
			<p class="mt-2">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, at!
			</p>
			<div
				class="container flex flex-col items-center md:items-start sm:items-center info bg-base-300 divide-y-2 divide-gray-400   p-4 mt-2 "
			>
				<div class="flex pb-2 justify-between w-full items-center">
					<p>Status</p>
					<div class="badge badge-success gap-2">{'Online'}</div>
				</div>

				<div class="flex pt-2 justify-between w-full items-center">
					<p>Member since</p>
					<p>19-32-32</p>
				</div>
			</div>
		</div>
	</div>
	<div class="right p-2 w-full md:w-3/4 sm:w-full  mx-auto">
		<div class="container flex flex-col info bg-base-100 rounded-md p-4 mb-4 ">
			<h1 class="self-start text-3xl">
				<span class="capitalize">{user.username}</span> - Posts
			</h1>
		</div>
		<div class=" gap-4  flex flex-row flex-wrap w-full ">
			{#each postAmount as post, i}
				<div
					class="max-w-sm rounded overflow-hidden shadow-lg mx-auto cursor-pointer"
				>
					<img
						class="w-full max-h-64 object-cover"
						src="/post/0{i + 1}.jpg"
						alt="Sunset in the mountains"
					/>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2">
							<h1>
								{post.title}
							</h1>
						</div>
						<p class="font-bold">{post.company}</p>
						<p class="text-gray-700 text-base overflow-hidden max-h-[10rem]">
							{post.description}
						</p>
					</div>

					<div class="px-6 pt-4 pb-2">
						<span
							class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
							>{post.tags[i]}</span
						>
						<span
							class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
							>{post.tags[i + 1]}</span
						>
						<span
							class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
							>{post.tags[i + 2]}</span
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
