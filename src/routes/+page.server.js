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

    // Gaat langs elk tijdvak en maakt een nieuwe lijst
    const erasWithQuestion = eras.map((era) => {
        // Zoekt in alle vragen de vraag die bij dit tijdvak hoort
        const question = questions.find((quizQuestion) => quizQuestion.exhibit_section_id === era.id)

        // Geeft het tijdvak terug met de vraag erbij
        return { ...era, question }
    })

    return { eras: erasWithQuestion }
}

export const actions = {
    // Krijgt het antwoord binnen als je zonder JavaScript op Controleer klikt
    checkAnswer: async ({ request }) => {
        const formData = await request.formData();
        const questionId = Number(formData.get("questionId"));
        const chosenKey = formData.get(`question-${questionId}`);

        // Stuurt terug welk antwoord er bij welke vraag is gekozen
        return { questionId, chosenKey };
    }
};