<script>
	import { page } from "$app/stores";

	let message = "Error";
</script>

<h1>Hello {message}</h1>
<h2>{$page.url.pathname} not found</h2>

<style>
	h1 {
		color: royalblue;
		text-transform: uppercase;
		font-size: 4em;
		text-align: center;
	}
	h2 {
		color: royalblue;
		font-size: 2.5em;
		text-align: center;
	}
</style>
