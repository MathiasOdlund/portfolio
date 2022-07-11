<script>
	let p = '<p>';
	let endp = '</p>';
	let h1 = '<h1>';
	let endh1 = '</h1>';
</script>

<head>
	<title>Services - Mathias Ödlund</title>
</head>
<section class="info  p-8 w-6/12 mx-auto mt-12 flex flex-col ">
	<div class="flex flex-col w-2/3">
		<p class="fakep">{h1}</p>
		<h1 class="text-white font-bold text-4xl mb-2">About me</h1>

		<p class="fakep">{endh1}</p>
		<p class="fakep">{p}</p>
		<p>
			I am a Norwegian-based web developer and automation engineer with a
			passion for solving hard n'old problems with new and modern cloud
			solutions.
		</p>
		<p class="mt-4">
			I have 4 years of experience working as a freelancer, developing &
			consulting for startups, local companies and other clients. I am a a
			proficient full-stack web developer that makes web applications with
			pretty much whatever tool fits best, so I can work with whatever Python,
			TypeScript/JavaScript and PHP framework the project requires.
		</p>
		<p class="mt-4">
			I consult for companies looking to automate their repetitive work by
			digitising the workflow with the latest and greatest technologies.
		</p>

		<p class="fakep">{endp}</p>
		<a href="/projects">
			<button class="btn btn-primary btn-outline w-[200px]"
				>F3atured projects</button
			>
		</a>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rancho&display=swap');
	.fakep {
		color: rgb(126, 126, 126);
		font-family: 'Rancho', cursive;
		font-size: 25px;
		letter-spacing: 1px;

		font-style: italic;
		margin-left: -20px;
		padding: 2px;
	}
	@keyframes transitionIn {
		from {
			opacity: 50%;
			transform: rotateX(-5deg);
		}
		to {
			opacity: 100%;
			transform: rotateX(0);
		}
	}
	.info {
		animation: transitionIn 0.75s;
	}
</style>
