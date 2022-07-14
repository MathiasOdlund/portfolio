<script>
	import ContactElement from '../../components/pages/contactElement/contactElement.svelte';
</script>

<head><title>Contact - Mathias Ödlund</title></head>

<div class="w-full h-screen mt-2 mx-auto tracking-in-expand justify-center p-4">
	<ContactElement />
</div>

<style>
	.tracking-in-expand {
		-webkit-animation: tracking-in-expand 0.3s
			cubic-bezier(0.215, 0.61, 0.355, 1) both;
		animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
	}
	@-webkit-keyframes tracking-in-expand {
		0% {
			letter-spacing: -0.5em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes tracking-in-expand {
		0% {
			letter-spacing: -0.5em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			opacity: 1;
		}
	}
</style>
