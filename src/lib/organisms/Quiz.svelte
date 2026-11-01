<script>
	import { QuizQuestion } from '$lib/index.js'

	// Krijgt alle quizvragen binnen van +page.svelte, en het antwoord dat zonder javascript is gecontroleerd
	let { questions, checkedAnswer } = $props()
</script>

<!-- Toont één QuizQuestion per vraag -->
<section>
	{#each questions as question, index}
		<!-- Geeft het gecontroleerde antwoord alleen door aan de vraag waar het bij hoort -->
		<QuizQuestion
			{question}
			number={index + 1}
			checkedKey={checkedAnswer?.questionId === question.id ? checkedAnswer.chosenKey : ''}
		/>
	{/each}
</section>
