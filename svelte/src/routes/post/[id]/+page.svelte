<script>
	export let data;

	let message = "Post";
</script>

<h1>Hello {message}</h1>
<h2>ID is {data.id}</h2>

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
