<script>
	import { QuizQuestion } from '$lib/index.js'

	let { questions } = $props()
</script>

<section>
	{#each questions as question}
		<QuizQuestion {question} />
	{/each}
</section>
