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
		flex-direction: space-between;
		align-items: center;
		justify-content: center;
		margin-top: 50px;
		gap: 200px;
		color: var(--color-text);
		font-family: Larken;
	}
</style>