<script>
	import Logo from '../atoms/Logo.svelte';
	import NavLink from '../atoms/NavLink.svelte';
	import Score from '../molecules/Score.svelte';
</script>

<header>
	<Logo />
	<div>
		<NavLink />
		<Score />
	</div>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 10rem 1rem 10rem;
		position: sticky;
		top: 0;
		z-index: 100;
    	background-color: var(--color-primary);
    	border-bottom: 2px solid var(--color-border);

		@media (prefers-color-scheme: light) {
			background-color: var(--color-text);
			border-bottom: 2px solid hsl(39, 51%, 67%);
		}

		@media (max-width: 48rem) {
			padding: 1rem 1.5rem;
		}
	}

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1.5rem;
	}
</style>
