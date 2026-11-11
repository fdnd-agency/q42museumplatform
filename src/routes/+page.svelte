<script>
	import { Quiz } from '$lib/index.js'
	import Timeline from '$lib/organisms/Timeline.svelte'

	let { data } = $props()
	const { eras, questions } = $derived(data)
</script>

<Timeline {eras} />
<Quiz {questions} />
