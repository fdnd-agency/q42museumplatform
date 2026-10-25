<script>
	import { Quiz } from '$lib/index.js'

	let { data } = $props()
	const { questions } = data
</script>

<Quiz {questions} />
