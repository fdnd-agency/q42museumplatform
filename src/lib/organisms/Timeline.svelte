<script>
    import Year from "$lib/atoms/Year.svelte";
    import EraCard from "$lib/organisms/EraCard.svelte";
    import { QuizQuestion } from "$lib/index.js";
    let { eras, checkedAnswer } = $props();
</script>

<main>
    <ol>
        {#each eras as era, index}
            <li>
                <div class="era">
                    <EraCard {era} />
                </div>
                <div class="timeline">
                    <Year year={era.start_year} />
                </div>
                <!-- Toont de vraag alleen als dit tijdvak er een heeft -->
                {#if era.question}
                    <div class="quiz">
                        <QuizQuestion
                            question={era.question}
                            number={index + 1}
                            // Geeft het gecontroleerde antwoord alleen door aan de vraag waar het bij hoort
                            checkedKey={checkedAnswer?.questionId ===
                            era.question.id
                                ? checkedAnswer.chosenKey
                                : ""}
                        />
                    </div>
                {/if}
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
        border-top: 1px solid var(--_line-color);
    }

    ol {
        --_line-color: var(--color-border);
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

    .quiz {
        grid-column: 3;
        width: 100%;
    }

    @media (prefers-color-scheme: light) {
        ol {
            --_line-color: hsl(var(--text-h), var(--text-s), 67%);
        }
    }
</style>
