<script>
	import { AnswerOption } from '$lib/index.js'

	let { question } = $props()
</script>

<form>
	<fieldset>
		<legend>{question.question}</legend>

		{#each question.options as { key, answer }}
			<AnswerOption name="question-{question.id}" {key} {answer} />
		{/each}
	</fieldset>

	<button type="submit">Controleer</button>
</form>
