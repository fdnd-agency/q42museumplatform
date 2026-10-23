const endpointBase = "https://fdnd-agency.directus.app";

export async function load() {
    const url = `${endpointBase}/items/teylers_museum_exhibits_sections`;
    const res = await fetch(url);

    const { data } = await res.json();
    console.log(data)

    return { eras: data }
}