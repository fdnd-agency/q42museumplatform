<script>
	import image from '$lib/assets/Electriseerm_001.jpg';
</script>

<picture>
	<img src={image} width="400" height="400" alt="Grote Elektriseer Machine">
</picture>

<style>
	picture {
		width: 400px;
		min-width: 200px;
		height: 300px;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;

		@media (max-width: 48rem) {
			display: none;
		}
	}
</style>