<script>
	import { Quiz } from '$lib/index.js'
	import Timeline from '$lib/organisms/Timeline.svelte'

	let { data, form } = $props()
	const { eras, questions } = $derived(data)
</script>

<Timeline {eras} />
<Quiz {questions} checkedAnswer={form} />
