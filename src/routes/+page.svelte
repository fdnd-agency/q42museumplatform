<script>
	import { Quiz } from '$lib/index.js'

	let { data, form } = $props()
	const { questions } = $derived(data)
</script>

<Quiz {questions} checkedAnswer={form} />
