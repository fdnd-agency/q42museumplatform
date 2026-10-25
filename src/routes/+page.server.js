const endpointBase = "https://fdnd-agency.directus.app";

export async function load() {
    const url = `${endpointBase}/items/teylers_museum_exhibits_sections`;
    const questionsUrl = `${endpointBase}/items/teylers_museum_quiz_questions?fields=id,question,options,explanation_correct,explanation_wrong,exhibit_section_id&filter[exhibit_section_id][_nnull]=true`;
    
    const [res, questionsResponse] = await Promise.all([
        fetch(url),
        fetch(questionsUrl)
    ])

    const { data: eras } = await res.json();
    const { data: questions } = await questionsResponse.json();

    console.log(eras)
    // console.log(questions)

    return { eras, questions }
}