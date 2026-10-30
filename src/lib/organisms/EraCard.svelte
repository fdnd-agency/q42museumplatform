<script>
    let { era } = $props();
</script>

<article>
    <h2>{era.title}</h2>
    <p>{era.summary}</p>
    <p>{era.content_blocks[0].text}</p>
    <blockquote>{era.content_blocks[1].text}</blockquote>
    <picture>
        <img
            src={`https://fdnd-agency.directus.app/assets/${era.cover}`}
            width="100%"
            height="400px"
            alt=""
        />
    </picture>
</article>

<style>
    h2 {
        font-size: var(--heading-h2);
        color: var(--color-text);
    }
    p {
        font-size: var(--body-body);
        color: var(--color-text);
    }
    article {
        margin: var(--spacing-s);
    }
    blockquote {
        margin: var(--spacing-m);
        font-size: var(--heading-quote);
        color: var(--color-text);
    }
    img {
        object-fit: contain;
    }
</style>
