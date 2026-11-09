<script>
    import Timeline from "$lib/organisms/Timeline.svelte";

    let { data } = $props();
</script>

<Timeline eras={data.eras} />
