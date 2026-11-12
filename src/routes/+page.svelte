<script>
	import Header from '$lib/components/organisms/header/Header.svelte';
	import Hero from '$lib/components/organisms/hero/Hero.svelte';
	import { Quiz } from '$lib/index.js'
	import Timeline from '$lib/organisms/Timeline.svelte'

	let { data, form } = $props()
	const { eras, questions } = $derived(data)
</script>

<Header />
<Hero />

<Timeline {eras} />
<Quiz {questions} checkedAnswer={form} />
