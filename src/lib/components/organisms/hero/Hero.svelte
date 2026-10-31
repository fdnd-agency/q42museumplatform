<script>
	import HeroText from '../../molecules/hero/HeroText.svelte';
	import Image from '../../atoms/hero/Image.svelte';
</script>

<section>
	<HeroText />
	<Image />
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 50px;
		gap: 2rem;
		color: var(--color-text);
		font-family: Larken;
		padding: 1rem 10rem;

		@media (max-width: 48rem) {
			flex-direction: column;
			padding: 1rem 1.5rem;
		}
	}
</style>