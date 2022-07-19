<script>
	import Analytics from '$lib/analytics.svelte';
	import '../app.css';
	// import Footer from "../components/footer/footer.svelte";
	import Navbar from '../components/navbar/Navbar.svelte';
</script>

<svelte:head />
<Analytics />
<div class="">
	<Navbar />

	<slot />
	<!-- <Footer /> -->
</div>
