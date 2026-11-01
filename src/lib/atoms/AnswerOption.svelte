<script>
    let { name, key, answer, result } = $props();
</script>

<!-- Krijgt de class correct of incorrect als dit het gecontroleerde antwoord is -->
<label class={result}>
    <input type="radio" {name} value={key} required />
    <span>{key}</span>
    {answer}
</label>

<style>
    label {
        /*kleuren voor dark mode */
        --_border-color: var(--color-quiz-answer-border-dark);
        --_selected-border-color: var(--color-primary);
        --_selected-background: var(--color-quiz-answer-selected-inner-dark);
        --_hover-background: var(--color-quiz-answer-hover);
        --_correct-color: var(--color-correct-dark);
        --_incorrect-color: var(--color-incorrect-dark);
        --_letter-background: var(--color-border);
        --_letter-color: var(--color-white);

        position: relative;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        border: 3px solid var(--_border-color);
        cursor: pointer;
        font-family: inter;
        font-weight: 700;

        &:has(input:checked) {
            border-color: var(--_selected-border-color);
            background: var(--_selected-background);
        }

        &.correct:has(input:checked) {
            border-color: var(--_correct-color);
            box-shadow: inset 0 0 0 .75px var(--_correct-color);
        }

        &.incorrect:has(input:checked) {
            border-color: var(--_incorrect-color);
            box-shadow: inset 0 0 0 .75px var(--_incorrect-color);
        }

        &:has(input:focus-visible) {
            outline: 3px solid var(--color-accent);
            outline-offset: 2px;
        }

        &:hover {
            background: var(--_hover-background);
        }

        &:active {
            background: var(--color-primary);
            color: var(--color-white);
        }
    }

    span {
        font-weight: 700;
        font-size: 1rem;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        display: flex;  
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        background: var(--_letter-background);
        color: var(--_letter-color);
    }

    input {
        position: absolute;
        opacity: 0;
    }

    /*kleuren voor light mode */
    @media (prefers-color-scheme: light) {
        label {
            --_border-color: var(--color-quiz-answer-border-light);
            --_selected-border-color: var(--color-accent);
            --_selected-background: var(--color-primary);
            --_hover-background: var(--color-border);
            --_correct-color: var(--color-correct-light);
            --_incorrect-color: var(--color-incorrect-light);
            --_letter-background: var(--color-quiz-answer-border-light);
            --_letter-color: var(--color-primary);
        }
    }
</style>
