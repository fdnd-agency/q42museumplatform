<script>
	import Logo from '../../atoms/header/Logo.svelte';
	import NavLink from '../../atoms/header/NavLink.svelte';
	import Score from '../../molecules/header/Score.svelte';
</script>

<header>
	<article>
		<Logo />
	</article>
	<article>
		<NavLink />
		<Score />
	</article>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 10rem 1rem 10rem;

		@media (max-width: 48rem) {
			padding: 1rem 1.5rem;
		}
	}

	article {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1.5rem;
	}
</style>
