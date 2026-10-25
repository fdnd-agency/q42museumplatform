<script>
	let { questions } = $props()
</script>

<section>
	{#each questions as question}
		<p>{question.question}</p>
	{/each}
</section>
