<script>
	import Header from '$lib/components/organisms/header/Header.svelte';
	import Hero from '$lib/components/organisms/hero/Hero.svelte';
	import Timeline from '$lib/organisms/Timeline.svelte'

	let { data, form } = $props()
	const { eras } = $derived(data)
</script>

<Header />
<Hero />

<Timeline {eras} checkedAnswer={form} />