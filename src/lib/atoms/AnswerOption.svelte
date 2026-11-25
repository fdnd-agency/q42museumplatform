<script>
    let { name, key, answer, result = "" } = $props();
</script>

<!-- Krijgt de class correct of incorrect als dit het gecontroleerde antwoord is -->
<label class={result}>
    <!-- Blijft aangevinkt na het herladen zonder javascript, als dit het gecontroleerde antwoord is -->
    <input type="radio" {name} value={key} required checked={result !== ""} />
    <span>{key}</span>
    {answer}
</label>

<style>
    label {
        /*kleuren voor dark mode */
        --_border-color: var(--color-text);
        --_selected-background: var(--color-text);
        --_selected-color: var(--color-primary);
        --_hover-background: color-mix(in srgb, var(--color-text) 15%, transparent);
        --_correct-color: var(--color-correct-light);
        --_incorrect-color: var(--color-incorrect-light);
        --_letter-background: var(--color-text);
        --_letter-color: var(--color-primary);
        --_focus-color: var(--color-accent);

        position: relative;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        border: 3px solid var(--_border-color);
        cursor: pointer;
        font-family: inter;
        font-weight: 700;

        &:hover {
            background: var(--_hover-background);
        }

        &:has(input:checked),
        &:active {
            border-color: var(--_selected-background);
            background: var(--_selected-background);
            color: var(--_selected-color);
            --_letter-background: var(--_selected-color);
            --_letter-color: var(--_selected-background);
        }

        &.correct:has(input:checked) {
            border-color: var(--_correct-color);
            box-shadow: inset 0 0 0 .75px var(--_correct-color);
        }

        &.incorrect:has(input:checked) {
            border-color: var(--_incorrect-color);
            box-shadow: inset 0 0 0 .75px var(--_incorrect-color);
        }

        &:has(input:focus) {
            outline: 3px solid var(--_focus-color);
            outline-offset: 2px;
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
            --_border-color: var(--color-primary);
            --_selected-background: var(--color-primary);
            --_selected-color: var(--color-text);
            --_hover-background: color-mix(in srgb, var(--color-primary) 15%, transparent);
            --_letter-background: var(--color-primary);
            --_letter-color: var(--color-text);
            --_focus-color: var(--color-primary);
        }
    }
</style>
