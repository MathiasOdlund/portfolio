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
	let selected = 'billing';
</script>

<div
	class="middle flex flex-col md:flex-row sm:flex-col mx-auto min-h-[90vh] mt-4 border w-9/12 "
>
	<div class="left w-full md:w-1/5 sm:w-full flex flex-col border-r">
		<ul
			class="menu p-4 overflow-y-auto w-full items-left bg-base-100 text-base-content"
		>
			<!-- Sidebar content here -->
			<button on:click={() => (selected = 'profile')}>
				<li>
					<a
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>Profile</a
					>
				</li>
			</button>

			<button on:click={() => (selected = 'account')}>
				<li>
					<a
						><svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>Account</a
					>
				</li>
			</button>

			<button on:click={() => (selected = 'billing')}>
				<li>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width={2}
						>
							<path
								stroke-linecap="round"
								strokeLinejoin="round"
								d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>Billing</a
					>
				</li>
			</button>

			<button on:click={() => (selected = 'privacyandpolicy')}>
				<li>
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
							/>
						</svg>Privacy & Legal</a
					>
				</li>
			</button>
		</ul>
	</div>
	<div class="right w-full md:w-4/5 sm:w-full p-10">
		<!-- Profile -->
		{#if selected == 'profile'}
			<div
				class="profile flex flex-col-reverse items-center md:items-start sm:items-center md:flex-row sm:flex-col-reverse"
			>
				<div class="inputs w-4/5">
					<div class="form-control w-full ">
						<label class="label">
							<span class="label-text">Username</span>
						</label>
						<label class="input-group">
							<span>Username</span>
							<input
								type="text"
								placeholder={user.username}
								class="input input-bordered w-full"
							/>
						</label>
					</div>

					<div class="form-control w-full mt-4 ">
						<label class="label">
							<span class="label-text">About</span>
						</label>

						<label class="input-group">
							<textarea
								type="text"
								class=" rounded-full input input-bordered w-full h-40 border"
							/>
						</label>
					</div>
				</div>
				<div class="logo flex flex-col items-center justify-start w-1/5 ml-2">
					<h1 class="mb-2 flex items-center hover:cursor-pointer ">
						Profile picture <svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 ml-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
							/>
						</svg>
					</h1>
					<div class="avatar online">
						<div class="w-40 md:w-full sm:w-40 rounded-full">
							<img src="https://placeimg.com/192/192/people" />
						</div>
					</div>
				</div>
			</div>
		{/if}
		<!-- Profile -->
		<!-- Account -->
		{#if selected == 'account'}
			<div class="form-control">
				<label class="label">
					<span class="label-text">Your Email</span>
				</label>
				<label class="input-group">
					<span>Email</span>

					<input
						type="text"
						placeholder={user.email}
						class="input input-bordered"
					/>
				</label>
			</div>
		{/if}
		<!-- Account -->
		<!-- Billing -->
		{#if selected == 'billing'}
			<div class="flex flex-col items-center w-full ">
				<div class="billingIntro text-center self-center ">
					<h1 class="text-3xl mb-4 ">Billing info</h1>
					<p class="w-3/4 self-center mx-auto ">
						Choose a payment method below or fill out the appropriate
						information
					</p>
				</div>
				<div class="options w-full mt-12 mb-12">
					<div class="flex w-full">
						<div
							class="grid h-20 flex-grow card bg-base-300 rounded-md place-items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
								<path
									fill-rule="evenodd"
									d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
									clip-rule="evenodd"
								/>
							</svg>
							Credit card
						</div>
						<div class="divider divider-horizontal" />
						<div
							class="grid h-20 flex-grow card bg-base-300 rounded-md place-items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							Gift card
						</div>

						<div class="divider divider-horizontal" />
						<div
							class="grid h-20 flex-grow card bg-base-300 rounded-md place-items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							Paypal
						</div>
					</div>
				</div>
			</div>
		{/if}
		<!-- Billing -->
		<!-- Privacy -->
		{#if selected == 'privacyandpolicy'}
			<div class="container text-center">
				<h1 class="text-3xl mb-4">Privacy Policy for company</h1>
				<p>
					At company.com, accessible from https://company.com, one of our main
					priorities is the privacy of our visitors. This Privacy Policy
					document contains types of information that is collected and recorded
					by company.com and how we use it. If you have additional questions or
					require more information about our Privacy Policy, do not hesitate to
					contact us. This Privacy Policy applies only to our online activities
					and is valid for visitors to our website with regards to the
					information that they shared and/or collect in company.com. This
					policy is not applicable to any information collected offline or via
					channels other than this website. Our Privacy Policy was created with
					the help of the TermsFeed Free Privacy Policy Generator. Consent By
					using our website, you hereby consent to our Privacy Policy and agree
					to its terms. Information we collect The personal information that you
					are asked to provide, and the reasons why you are asked to provide it,
					will be made clear to you at the point we ask you to provide your
					personal information. If you contact us directly, we may receive
					additional information about you such as your name, email address,
					phone number, the contents of the message and/or attachments you may
					send us, and any other information you may choose to provide. When you
					register for an Account, we may ask for your contact information,
					including items such as name, company name, address, email address,
					and telephone number. How we use your information We use the
					information we collect in various ways, including to: Provide,
					operate, and maintain our website Improve, personalize, and expand our
					website Understand and analyze how you use our website Develop new
					products, services, features, and functionality Communicate with you,
					either directly or through one of our partners, including for customer
					service, to provide you with updates and other information relating to
					the website, and for marketing and promotional purposes Send you
					emails Find and prevent fraud Log Files company.com follows a standard
					procedure of using log files. These files log visitors when they visit
					websites. All hosting companies do this and a part of hosting
					services' analytics. The information collected by log files include
					internet protocol (IP) addresses, browser type, Internet Service
					Provider (ISP), date and time stamp, referring/exit pages, and
					possibly the number of clicks. These are not linked to any information
					that is personally identifiable. The purpose of the information is for
					analyzing trends, administering the site, tracking users' movement on
					the website, and gathering demographic information. Cookies and Web
					Beacons Like any other website, company.com uses 'cookies'. These
					cookies are used to store information including visitors' preferences,
					and the pages on the website that the visitor accessed or visited. The
					information is used to optimize the users' experience by customizing
					our web page content based on visitors' browser type and/or other
					information. Advertising Partners Privacy Policies You may consult
					this list to find the Privacy Policy for each of the advertising
					partners of company.com. Third-party ad servers or ad networks uses
					technologies like cookies, JavaScript, or Web Beacons that are used in
					their respective advertisements and links that appear on company.com,
					which are sent directly to users' browser. They automatically receive
					your IP address when this occurs. These technologies are used to
					measure the effectiveness of their advertising campaigns and/or to
					personalize the advertising content that you see on websites that you
					visit. Note that company.com has no access to or control over these
					cookies that are used by third-party advertisers. Third Party Privacy
					Policies company.com's Privacy Policy does not apply to other
					advertisers or websites. Thus, we are advising you to consult the
					respective Privacy Policies of these third-party ad servers for more
					detailed information. It may include their practices and instructions
					about how to opt-out of certain options. You can choose to disable
					cookies through your individual browser options. To know more detailed
					information about cookie management with specific web browsers, it can
					be found at the browsers' respective websites. CCPA Privacy Rights (Do
					Not Sell My Personal Information) Under the CCPA, among other rights,
					California consumers have the right to: Request that a business that
					collects a consumer's personal data disclose the categories and
					specific pieces of personal data that a business has collected about
					consumers. Request that a business delete any personal data about the
					consumer that a business has collected. Request that a business that
					sells a consumer's personal data, not sell the consumer's personal
					data. If you make a request, we have one month to respond to you. If
					you would like to exercise any of these rights, please contact us.
					GDPR Data Protection Rights We would like to make sure you are fully
					aware of all of your data protection rights. Every user is entitled to
					the following: The right to access – You have the right to request
					copies of your personal data. We may charge you a small fee for this
					service. The right to rectification – You have the right to request
					that we correct any information you believe is inaccurate. You also
					have the right to request that we complete the information you believe
					is incomplete. The right to erasure – You have the right to request
					that we erase your personal data, under certain conditions. The right
					to restrict processing – You have the right to request that we
					restrict the processing of your personal data, under certain
					conditions. The right to object to processing – You have the right to
					object to our processing of your personal data, under certain
					conditions. The right to data portability – You have the right to
					request that we transfer the data that we have collected to another
					organization, or directly to you, under certain conditions. If you
					make a request, we have one month to respond to you. If you would like
					to exercise any of these rights, please contact us. Children's
					Information Another part of our priority is adding protection for
					children while using the internet. We encourage parents and guardians
					to observe, participate in, and/or monitor and guide their online
					activity. company.com does not knowingly collect any Personal
					Identifiable Information from children under the age of 13. If you
					think that your child provided this kind of information on our
					website, we strongly encourage you to contact us immediately and we
					will do our best efforts to promptly remove such information from our
					records.
				</p>
			</div>
		{/if}
		<!-- Privacy -->
	</div>
</div>
