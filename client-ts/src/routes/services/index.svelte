<script>
	let p = '<p>';
	let endp = '</p>';
	let h1 = '<h1>';
	let endh1 = '</h1>';
</script>

<head>
	<title>Services - Mathias Ödlund</title>
</head>
<section
	class="info  p-8 w-full md:w-8/12 lg:w-6/12 sm:w-full mx-auto mt-12 flex flex-col "
>
	<div class="flex flex-col w-full md:w-2/3 sm:w-full">
		<h1
			class="text-white font-bold text-4xl mb-2 flex self-center md:self-start sm:self-center"
		>
			<p class="fakeh1">{h1}</p>
			About me
			<p class="fakeh1">{endh1}</p>
		</h1>

		<p class="fakep">{p}</p>
		<p class="self-center md:self-start sm:self-center">
			I am a Norwegian-based web developer and automation engineer with a
			passion for solving hard n'old problems with new and modern cloud
			solutions.
		</p>
		<p class="mt-4 self-center md:self-start sm:self-center">
			I have 4 years of experience working as a freelancer, developing &
			consulting for startups, local companies and other clients. I am a a
			proficient full-stack web developer that makes web applications with
			pretty much whatever tool fits best, so I can work with whatever Python,
			TypeScript/JavaScript and PHP framework the project requires.
		</p>
		<p class="mt-4 self-center md:self-start sm:self-center">
			I consult for companies looking to automate their repetitive work by
			digitising the workflow with the latest and greatest technologies.
		</p>

		<p class="fakep">{endp}</p>
		<a href="/projects">
			<button class="btn btn-primary btn-outline w-full md:w-[200px] sm:w-full"
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
	.fakeh1 {
		color: rgb(126, 126, 126);
		font-family: 'Rancho', cursive;
		font-size: 25px;
		letter-spacing: 1px;

		font-style: italic;

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
