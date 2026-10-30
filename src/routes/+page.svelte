<script>
    import Timeline from "$lib/organisms/Timeline.svelte";

    let { data } = $props();
</script>

<Timeline eras={data.eras} />

<style>
    :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background-color: var(--color-primary);
    }
</style>
