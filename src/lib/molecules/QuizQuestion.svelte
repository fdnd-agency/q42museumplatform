<script>
    import { AnswerOption } from "$lib/index.js";

    // Krijgt één vraag binnen, met de antwoorden en de uitleg, en het nummer van de vraag
    let { question, number } = $props();

    // Houdt bij welke letter er gekozen is, leeg tot je op Controleer klikt
    let chosenKey = $state("");

    // Zoekt de letter van het goede antwoord, alleen dat antwoord heeft is_correct
    const correctKey = $derived(
        question.options.find((option) => option.is_correct).key,
    );
    // Houdt bij of er al op Controleer is geklikt, dat is zo zodra chosenKey niet meer leeg is
    const isAnswered = $derived(chosenKey !== "");
    // Houdt bij of het antwoord goed is, dat is zo als chosenKey gelijk is aan correctKey
    const isCorrect = $derived(chosenKey === correctKey);

    // Kiest de status rechtsboven in de card
    const status = $derived.by(() => {
        if (!isAnswered) return "Nog niet beantwoord";
        if (isCorrect) return "Goed beantwoord";
        return "Fout, probeer het nog eens";
    });

    // Onthoudt welk antwoord is aangevinkt als je op Controleer klikt
    const checkAnswer = (event) => {
        // Voorkomt dat de pagina ververst
        event.preventDefault();

        chosenKey = new FormData(event.currentTarget).get(
            `question-${question.id}`,
        );
    };

</script>

<!-- Voert checkAnswer uit als je op Controleer klikt -->
<form onsubmit={checkAnswer}>
    <header>
        <p>Vraag {number}</p>
        <p>{status}</p>
    </header>

    <fieldset>
        <legend>{question.question}</legend>

        {#each question.options as { key, answer }}
            <AnswerOption name="question-{question.id}" {key} {answer} />
        {/each}
    </fieldset>

    <button type="submit">Controleer</button>

    <output>
        {#if isAnswered}
            {#if isCorrect}
                <p class="correct">
                    {chosenKey}
                    {question.explanation_correct}
                </p>
            {:else}
                <p class="incorrect">
                    {chosenKey}
                    {question.explanation_wrong}
                </p>
            {/if}
        {/if}
    </output>
</form>

<style>
    form {
        background: var(--color-quiz-card-dark);
        padding: 1.5rem;
        font-size: 1rem;
        line-height: 1.6;
        font-family: inter;
        margin: 1rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    legend {
        font-weight: bold;
        margin-bottom: 1rem;
        font-size: 1.4rem;
    }

    fieldset {
        border: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .correct {
        background: hsl(36, 50%, 96%);
        border: 3px solid var(--color-correct-dark);
        padding: 1rem;
    }

    .incorrect {
        background: hsl(36, 50%, 96%);
        border: 3px solid var(--color-incorrect-dark);
        padding: 1rem;
    }

    button {
        margin-top: 1rem;
        padding: 0.75rem 2rem;
        background: var(--color-border);
        color: white;
        border: none;
        cursor: pointer;
        font-family: inter;
        font-weight: 700;
        border: 3px solid var(--color-border);

        &:hover {
            background: hsl(195, 25%, 16%);
        }

        &:active {
            background: hsl(0, 0%, 100%);
            color: var(--color-primary);
        }
    }
</style>
