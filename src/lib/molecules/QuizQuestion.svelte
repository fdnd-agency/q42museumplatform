<script>
	import { AnswerOption } from '$lib/index.js'

	// Krijgt één vraag binnen, met de antwoorden en de uitleg, en het nummer van de vraag
	let { question, number } = $props()

	// Houdt bij of er al op Controleer is geklikt
	let isAnswered = $state(false)
	// Houdt bij of het gekozen antwoord goed is
	let isCorrect = $state(false)
	// Houdt bij welke letter er gekozen is
	let chosenKey = $state('')

	// Kiest de status rechtsboven in de card
	const status = $derived.by(() => {
		if (!isAnswered) return 'Nog niet beantwoord'
		if (isCorrect) return 'Goed beantwoord'
		return 'Fout, probeer het nog eens'
	})

	// Checkt het gekozen antwoord
	const checkAnswer = (event) => {
		// Voorkomt dat de pagina ververst
		event.preventDefault()

		// Leest uit welk antwoord is aangevinkt, bijvoorbeeld 'B'
		const formData = new FormData(event.currentTarget)
		chosenKey = formData.get(`question-${question.id}`)

		// Zoekt het goede antwoord, alleen dat antwoord heeft is_correct
		const correctOption = question.options.find((option) => option.is_correct)

		isCorrect = chosenKey === correctOption.key
		isAnswered = true
	}
</script>

<!-- Voert checkAnswer uit als je op Controleer klikt -->
<form onsubmit={checkAnswer}>
	<header>
		<p>Vraag {number}</p>
		<p>{status}</p>
	</header>

	<fieldset>
		<legend>{question.question}</legend>

		{#each question.options as { key, answer }}
			<AnswerOption name="question-{question.id}" {key} {answer} />
		{/each}
	</fieldset>

	<button type="submit">Controleer</button>

	<output>
		{#if isAnswered}
			{#if isCorrect}
				<p>{chosenKey} is goed. {question.explanation_correct}</p>
			{:else}
				<p>{chosenKey} is fout. {question.explanation_wrong}</p>
			{/if}
		{/if}
	</output>
</form>

<style>
	
	form {
		--_card-background: var(--color-quiz-card-dark);
		--_card-text: var(--color-primary);

		background: var(--_card-background);
		color: var(--_card-text);
		padding: 1.5rem;
		font-size: 1rem;
		line-height: 1.6;
	}

	header {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	fieldset {
		border: none;
		margin: 0;
		padding: 0;
	}

</style>
