<script>
    let { name, key, answer } = $props();
</script>

<label>
    <input type="radio" {name} value={key} required />
    <span>{key}</span>
    {answer}
</label>

<style>
    label {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        border: 3px solid var(--color-quiz-answer-unselected-border-dark);
        cursor: pointer;
        font-family: inter;
        font-weight: 700;

        &:has(input:checked) {
            border-color: var(--color-quiz-answer-border-dark);
            background: var(--color-quiz-answer-selected-inner-dark);
        }

        &:has(input:focus-visible) {
            outline: 3px solid var(--color-accent);
            outline-offset: 2px;
        }

        &:hover {
            background: var(--color-quiz-answer-hover);
        }

        &:active {
            background: var(--color-primary);
            color: var(--color-white);
        }
    }

    span {
        font-weight: bold;
        font-size: 1rem;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        display: flex;  
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        background: var(--color-border);
        color: var(--color-white);
    }

    input {
        position: absolute;
        opacity: 0;
    }
</style>
