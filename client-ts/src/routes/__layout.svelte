<script>
	import '../app.css';
	// import Footer from "../components/footer/footer.svelte";
	import Navbar from '../components/navbar/Navbar.svelte';
</script>

<svelte:head />

<div class="">
	<Navbar />

	<slot />
	<!-- <Footer /> -->
</div>
