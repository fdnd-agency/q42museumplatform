<script>
	import { QuizQuestion } from '$lib/index.js'

	// Krijgt alle quizvragen binnen van +page.svelte
	let { questions } = $props()
</script>

<!-- Toont één QuizQuestion per vraag -->
<section>
	{#each questions as question, index}
		<QuizQuestion {question} number={index + 1} />
	{/each}
</section>
