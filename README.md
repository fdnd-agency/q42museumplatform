# Q42 & Teylers Museum | Tijdlijn & quiz

Live link: [https://q42-teylers.netlify.app/](https://q42-teylers.netlify.app/)

## Inhoudsopgave

- [Beschrijving](#beschrijving)
- [Kenmerken](#kenmerken)
- [Ontwerp en documentatie](#ontwerp-en-documentatie)
- [Installatie](#installatie)
- [Projectteam 2026](#projectteam-2026)
- [Licentie](#licentie)

## Beschrijving

Q42 bouwt een museumplatform dat meerdere musea kunnen gebruiken. Voor dat platform maakten wij in opdracht van Q42 twee componenten voor Teylers Museum: een tijdlijn en een quiz.

De tijdlijn vertelt per periode de geschiedenis van de Grote Elektriseermachine. Met de quiz test de bezoeker daarna wat hij heeft geleerd. De quiz controleert een antwoord direct, zonder laadtijd. De belangrijkste doelgroep is een jong publiek.

Alle content komt uit Directus en de componenten krijgen hun data als props. Daardoor kan een ander museum dezelfde componenten met zijn eigen content gebruiken.

<img src="https://github.com/user-attachments/assets/13b358bb-9402-4a2b-a370-e0e6dcc0a3b8" alt="Het definitieve ontwerp van de tijdlijn en de quiz voor Teylers Museum" width="600">

## Kenmerken

Dit project is gebouwd met SvelteKit en Svelte 5. De content wordt op de server opgehaald uit Directus, dus de pagina werkt ook zonder JavaScript. Met JavaScript controleert de quiz een antwoord in de browser, zonder extra request. Zonder JavaScript vangt een form action het op.

De componenten zijn opgedeeld volgens Atomic Design in atoms, molecules en organisms. Alle kleuren staan als design tokens in `src/lib/style.css`, en light mode werkt via `prefers-color-scheme`. De quiz werkt met alleen een toetsenbord, en een screenreader leest de feedback voor.

De site wordt gehost op Netlify. Elke pull request krijgt een eigen deploy preview.

Wij hebben de volgende technieken en technologieën gebruikt:

- [Svelte](https://svelte.dev/docs/svelte/overview)
- [SvelteKit](https://svelte.dev/docs/kit/introduction)
- [Directus](https://directus.io/)
- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)
- Link naar [Figma](https://www.figma.com/design/Pti5Tf5T3p58wragPZmL9Q/Q42)
- [Netlify](https://www.netlify.com/)

## Ontwerp en documentatie

Lees deze eerst voordat je aan de slag gaat:

- [Debriefing](https://github.com/fdnd-agency/q42museumplatform/issues/1): de opdracht, de doelgroep en de eisen van Q42
- [Definitief ontwerp en breakdownschets](https://github.com/fdnd-agency/q42museumplatform/issues/27)
- [Datamodel](https://github.com/fdnd-agency/q42museumplatform/issues/25): hoe de quizvragen in Directus aan de tijdlijn gekoppeld zijn
- [Feedback van de sprint reviews](https://github.com/fdnd-agency/q42museumplatform/issues/33)
- [CONTRIBUTING.md](./CONTRIBUTING.md): onze werkwijze, conventies en teamafspraken
- [Projectboard](https://github.com/orgs/fdnd-agency/projects/116)

## Installatie

```
1. Clone de repository
2. Ga naar de branch dev d.m.v. git checkout dev
3. Installeer npm packages d.m.v. npm install
4. Run de localhost d.m.v. npm run dev
```

Een `.env`-bestand is niet nodig: de Directus API is openbaar.


## Projectteam 2026

- [Oumaima](https://github.com/meemo99) 
- [Tom](https://github.com/TZGaming) 
- [Yassine](https://github.com/yassineAk1)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
