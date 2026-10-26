<script>
	import { AnswerOption } from '$lib/index.js'

	// Krijgt één vraag binnen, met de antwoorden en de uitleg
	let { question } = $props()

	// Houdt bij of er al op Controleer is geklikt
	let isAnswered = $state(false)
	// Houdt bij of het gekozen antwoord goed is
	let isCorrect = $state(false)

	// Checkt het gekozen antwoord
	const checkAnswer = (event) => {
		// Voorkomt dat de pagina ververst
		event.preventDefault()

		// Leest uit welk antwoord is aangevinkt, bijvoorbeeld 'B'
		const formData = new FormData(event.currentTarget)
		const chosenKey = formData.get(`question-${question.id}`)

		// Zoekt het goede antwoord, alleen dat antwoord heeft is_correct
		const correctOption = question.options.find((option) => option.is_correct)

		isCorrect = chosenKey === correctOption.key
		isAnswered = true
	}
</script>

<!-- Voert checkAnswer uit als je op Controleer klikt -->
<form onsubmit={checkAnswer}>
	<fieldset>
		<legend>{question.question}</legend>

		{#each question.options as { key, answer }}
			<AnswerOption name="question-{question.id}" {key} {answer} />
		{/each}
	</fieldset>

	<button type="submit">Controleer</button>

	{#if isAnswered}
		<p>{isCorrect ? question.explanation_correct : question.explanation_wrong}</p>
	{/if}
</form>
