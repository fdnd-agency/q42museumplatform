<script>
    import Year from "$lib/atoms/Year.svelte";
    import EraCard from "$lib/organisms/EraCard.svelte";
    let { eras } = $props();
</script>

<main>
    <ol>
        {#each eras as era}
            <li class="era">
                <EraCard {era} />
            </li>
            <li class="timeline">
                <Year year={era.start_year} />
            </li>
        {/each}
    </ol>
</main>

<style>
    li {
        width: 50%;
        list-style: none;
        color: var(--color-text);
    }
    ol {
        display: grid;
        grid-template-columns: 1fr 10rem 1fr;
        margin: var(--spacing-l);
        list-style: none;
    }
    .timeline {
        grid-column: 2;
        background-color: var(--color-text);
    }
    .era {
        grid-column: 1;
        width: 100%;
    }
</style>
