<script>
    let { era } = $props();
</script>

<article>
    <h2>{era.title}</h2>
    <p>{era.summary}</p>
    <p>{era.content_blocks[0].text}</p>
    <blockquote>{era.content_blocks[1].text}</blockquote>
    <picture>
        <source
            srcset={`https://fdnd-agency.directus.app/assets/${era.cover}?width=500&height=400&format=avif`}
            type="image/avif"
        />
        <source
            srcset={`https://fdnd-agency.directus.app/assets/${era.cover}?width=500&height=400&format=webp`}
            type="image/webp"
        />
        <img
            src={`https://fdnd-agency.directus.app/assets/${era.cover}?width=500&height=400&`}
            width="500"
            height="400"
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
        line-height: 1.4;
        font-size: var(--body-body);
        color: var(--color-text);
        margin: 1lh;
    }
    article {
        margin: var(--spacing-s);
        max-width: 75ch;
    }
    blockquote {
        margin: var(--spacing-m);
        font-size: var(--heading-quote);
        color: var(--color-text);
    }
    img {
        object-fit: cover;
        max-inline-size: 100%;
        block-size: auto;
    }
</style>
