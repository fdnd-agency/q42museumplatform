<script>
    import { AnswerOption } from "$lib/index.js";

    // Krijgt één vraag binnen, met de antwoorden en de uitleg, het nummer van de vraag, en de letter die zonder javascript is gecontroleerd
    let { question, number, checkedKey = "" } = $props();

    // Houdt bij welke letter er gekozen is, begint met de letter van de server en verandert als je met javascript op Controleer klikt
    let chosenKey = $derived(checkedKey);

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

    // Geeft per antwoord terug of het goed of fout is, alleen voor de letter die je hebt gecontroleerd
    const getResult = (key) => {
        if (key !== chosenKey) return "";
        if (isCorrect) return "correct";
        return "incorrect";
    };

</script>

<form method="POST" action="?/checkAnswer" onsubmit={checkAnswer}>
    <header>
        <p>Vraag {number}</p>
        <p>{status}</p>
    </header>

    <fieldset>
        <legend>{question.question}</legend>

        {#each question.options as { key, answer }}
            <AnswerOption
                name="question-{question.id}"
                {key}
                {answer}
                result={getResult(key)}
            />
        {/each}
    </fieldset>

    <button type="submit" name="questionId" value={question.id}>Controleer</button>

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
        /*kleuren voor dark mode */
        --_card-background: var(--color-quiz-card-dark);
        --_text-color: var(--color-primary);
        --_feedback-background: var(--color-quiz-answer-selected-inner-dark);
        --_correct-color: var(--color-correct-dark);
        --_incorrect-color: var(--color-incorrect-dark);
        --_button-background: var(--color-border);
        --_button-color: var(--color-white);
        --_button-hover-background: var(--color-button-hover);
        --_button-active-background: var(--color-white);

        background: var(--_card-background);
        color: var(--_text-color);
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
        font-weight: 700;
    }

    legend {
        font-weight: 700;
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

    output p {
        background: var(--_feedback-background);
        border: 3px solid;
        padding: 1rem;
    }

    .correct {
        border-color: var(--_correct-color);
    }

    .incorrect {
        border-color: var(--_incorrect-color);
    }

    button {
        margin-top: 1rem;
        padding: 0.75rem 2rem;
        background: var(--_button-background);
        color: var(--_button-color);
        cursor: pointer;
        font-family: inter;
        font-weight: 700;
        border: 3px solid var(--_button-background);

        &:hover {
            background: var(--_button-hover-background);
            border-color: var(--_button-hover-background);
        }

        &:active {
            background: var(--_button-active-background);
            border-color: var(--_button-active-background);
            color: var(--color-primary);
        }

        &:focus-visible {
            outline: 3px solid var(--color-accent);
            outline-offset: 2px;
        }
    }

    /*kleuren voor light mode */
    @media (prefers-color-scheme: light) {
        form {
            --_card-background: var(--color-quiz-card-light);
            --_text-color: var(--color-quiz-answer-border-light);
            --_feedback-background: var(--color-primary);
            --_correct-color: var(--color-correct-light);
            --_incorrect-color: var(--color-incorrect-light);
            --_button-background: var(--color-quiz-answer-border-light);
            --_button-color: var(--color-primary);
            --_button-hover-background: var(--color-white);
            --_button-active-background: var(--color-accent);
        }
    }
</style>
