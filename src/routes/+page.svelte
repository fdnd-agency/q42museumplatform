<script>
	import Header from '$lib/organisms/Header.svelte';
	import Hero from '$lib/organisms/Hero.svelte';
	import { Quiz } from '$lib/index.js'
	import Timeline from '$lib/organisms/Timeline.svelte'

	let { data, form } = $props()
	const { eras, questions } = $derived(data)
</script>

<Header />
<Hero />

<Timeline {eras} />
<Quiz {questions} checkedAnswer={form} />
