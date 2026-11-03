<script>
    import Year from "$lib/atoms/Year.svelte";
    import EraCard from "$lib/organisms/EraCard.svelte";
    let { eras } = $props();
</script>

<main>
    <ol>
        {#each eras as era}
            <li>
                <div class="era">
                    <EraCard {era} />
                </div>
                <div class="timeline">
                    <Year year={era.start_year} />
                </div>
            </li>
        {/each}
    </ol>
</main>

<style>
    li {
        display: grid;
        grid-template-columns: subgrid;
        grid-column: 1 /-1;
        list-style: none;
        color: var(--color-text);
    }
    ol {
        display: grid;
        grid-template-columns: 1fr 5rem 1fr;
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
