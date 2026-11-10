<script>
    let { year } = $props();
</script>

<h3><time>{year}</time></h3>

<style>
    h3 {
        font-size: var(--heading-display);
        background-color: transparent;
    }

    time {
        display: block;
        width: 2ch;
        margin-inline: auto;
        text-align: center;
        overflow-wrap: anywhere;
        font-variant-numeric: tabular-nums;
        line-height: 0.9;
        color: var(--color-primary);
        background-color: transparent;
        margin-top: var(--spacing-xs);
    }
</style>
