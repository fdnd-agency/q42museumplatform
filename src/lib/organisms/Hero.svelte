<script>
	import HeroText from '../molecules/HeroText.svelte';
	import Image from '../atoms/HeroImage.svelte';
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
		font-family: Larken, Arial, Helvetica, sans-serif;
		padding: 1rem 10rem;

        @media (prefers-color-scheme: light) {
            color: var(--color-primary);
        }

		@media (max-width: 48rem) {
			flex-direction: column;
			padding: 1rem 1.5rem;
		}
	}
</style>