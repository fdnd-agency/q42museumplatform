<script>
	import image from '$lib/assets/Electriseerm_001.jpg';
</script>

<img src={image} width="400" height="400" alt="Grote Elektriseer Machine">

<style>
	img {
		display: block;
		width: 100%;
		max-width: 400px;
		height: 225px;
		object-fit: cover;

        @media (max-width: 48rem) {
            display: none;
        }
	}
</style>