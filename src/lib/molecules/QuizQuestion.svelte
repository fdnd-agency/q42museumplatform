<script>
	let { question } = $props()
</script>

<form>
	<fieldset>
		<legend>{question.question}</legend>

		{#each question.options as option}
			<p>{option.key}. {option.answer}</p>
		{/each}
	</fieldset>

	<button type="submit">Controleer</button>
</form>
