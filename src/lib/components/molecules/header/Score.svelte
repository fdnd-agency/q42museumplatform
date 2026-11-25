<div>
    <p>Score</p>
    <p>0/5</p>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        gap: 0.4rem;
        outline : 1.5px solid var(--color-border-button);
        width: max-content;
        padding: 1rem 1rem 1rem 1rem;
        border-radius: 0.3rem;

        @media (prefers-color-scheme: light) {
            outline : 1.5px solid hsl(196, 37%, 40%);
        }
    }

    p {
        font-family: Inter, Arial, Helvetica, sans-serif;
        font-size: var(--body-button);
        font-weight: 400;
        color: var(--color-text);
        margin: 0;
        width: max-content;

        @media (prefers-color-scheme: light) {
            color: var(--color-primary);
        }
    }

    p:nth-of-type(2) {
        font-weight: 700;
        color: var(--color-accent);

        @media (prefers-color-scheme: light) {
            color: var(--color-primary);
        }
    }
</style>