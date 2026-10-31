<script>
	import { Quiz } from '$lib/index.js'

	let { data } = $props()
	const { questions } = $derived(data)
</script>

<Quiz {questions} />
