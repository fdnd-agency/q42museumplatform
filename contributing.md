# Afspraken over samenwerking: Q42 Museumplatform
> In dit document staan de afspraken over hoe wij samenwerken aan de website voor Q42. Door dezelfde werkwijze en conventies te gebruiken houden we het project overzichtelijk en behouden we consistentie.
 
## Teamafspraken & teamcanvas
 
- ### Team canvas
 <img width="1113" height="782" alt="afbeelding" src="https://github.com/user-attachments/assets/ca64dfaa-4e9b-40ef-9e60-24ce095438b2" />
 
### Gedeelde doelen
- De basis van SvelteKit onder de knie krijgen.
- Kennis delen in de groep en deze toepassen
- Elkaar ondersteunen bij het behalen van persoonlijke leerdoelen
 
### Teamafspraken
- Elke lesdag houden we een korte standup
- Taken en voortgang houden we bij in het [projectboard](https://github.com/orgs/fdnd-agency/projects/116)
- Iedere taak heeft een duidelijke hoofdverantwoordelijke
- We starten taken aan de hand van issues
- Blockers communiceren we op tijd
- We verdelen het werk zo dat iedereen bijdraagt aan alle fases van de dlc
- We vragen en geven actief feedback
- We volgen de FDND code conventies
- We reviewen elkaars werk voordat het wordt gemerged
- We ondersteunen elkaar bij onze persoonlijke leerdoelen.
- Aan het einde van iedere week reflecteren we kort op onze samenwerking
- Elke sprint wisselen we van Scrum Master
 
***
 
 
## Workflow
We werken vanuit kleine en duidelijke issues (proces en doel moet navolgbaar zijn)
 
```bash
issue
-> branch
-> commits
-> pull request
-> review
-> feedback verwerken
-> mergen
-> done
```
 
### `issues`
Voor iedere taak maken we een issue aan, bijvoorbeeld:
```
[Feature]
[Documentation]
[Task]
[Team]
```
Een issue bevat minimaal:
- Het doel van de taak, waarom bestaat de taak
- Een korte checklist, wat moet er gebeuren
- Een hoofdverantwoordelijke
- Welke keuzes onderweg zijn gemaakt
- Wat het resultaat is
 
### issue template
Om onze issues consistent en navolgbaar te houden gebruiken we bij ieder nieuw issue dezelfde basisstructuur.
 
```
# [Korte duidelijke titel]
 
## Doel
<!-- Wat wil je met dit issue bereiken? -->
 
 
## Context
<!-- Waarom is dit issue nodig? Wat is het probleem, knelpunt of de aanleiding? -->
 
 
## Acceptance criteria
<!-- Wanneer is dit issue klaar? -->
 
- [ ] ...
- [ ] ...
- [ ] ...
```
- Tijdens het werken gebruiken we de comments onder het issue om belangrijke keuzes, schetsen, feedback, blockers en iteraties vast te leggen. Zo blijft het issue zelf overzichtelijk, terwijl het proces wel navolgbaar blijft.
 
 
### `Branches`
Vanuit de main maken wij branches aan voor een korte taak.
- De naam beschrijft waar je aan werkt, bijvoorbeeld:
```
feature-person-card
fix-person-image
docs-contributing
```
Een branch hoort bij een duidelijk issue en blijft gericht op 1 taak of feature
 
### `Commits`
We volgen de FDND workflowconventies en gebruiken conventional commits.
 
Structuur:
```
type: korte beschrijving #issuenummer
```
- `Feat:` nieuwe functionaliteit
- `Fix:` probleem oplossen
- `docs:` documentatie
- `Refactor:` code verbeteren zonder de functionaliteit te veranderen
- `test:` tests toevoegen of aanpassen
- `style:`
 
> Iedere relevante commit verwijst naar het bijbehorende issue
 
### `Pull request & review`
> [Bron: pull request](Helping others review your changes - GitHub Docs)
 
1. Voor pull requests gebruiken we de onderstaande template;
 
```
## Wat verandert er?
 
Lost issue #1337 op.
 
<!-- Een PR moet genoeg informatie bevatten om ook later nog goed te begrijpen wat er is veranderd. Beschrijf bijvoorbeeld: wat was het probleem / waarom was deze wijziging nodig, hoe lost deze PR het probleem op en zijn er nog vragen of discussiepunten? Neem belangrijke informatie uit het Issue hier kort over in plaats van alleen naar het issue te linken. -->
 
[Live site](https://livesite.com)
 
## Hoe is dit getest?
 
<!-- Link hier naar de testresultaten in de Wiki -->
 
### RAPPE-principes
 
- [ ] [User test]()
- [ ] [Accessibility test]()
- [ ] [Progressive Enhancement test]()
- [ ] [Performance test]()
- [ ] [Responsive Design test]()
- [ ] [Device test]()
- [ ] [Browser test]()
 
## Afbeeldingen
 
<!-- Vooral relevant bij visuele/UI-wijzigingen. Voeg indien mogelijk screenshots toe van de situatie vóór en na de wijziging. -->
 
## Hoe review je deze PR?
 
<!-- Geef de reviewer duidelijke stappen om de wijziging te controleren. -->
```
2. Minimaal 1 teamgenoot reviewt het werk.
3. Feedback wordt eerst verwerkt of onderbouwd voordat de PR wordt gemerged.
 
***
 
## Code conventies
We volgen de [FDND code conventies](https://docs.fdnd.nl/conventies.html#pull-request)
 
***
 
 
### Reflecteren op de samenwerking
Aan het einde van iedere week bespreken we kort:
- Wat ging goed?
- Wat liep minder goed?
- Waren verantwoordelijkheden duidelijk?
- Hebben we knelpunten op tijd besproken?
- Hoe verliep feedback geven en ontvangen?
- Wat willen we volgende week verbeteren?
 
### Stand ups & communicatie
Op iedere lesdag houden we een korte stand up
 
iedereen benoemt:
- Waar werk ik aan?
- Wat heb ik gedaan?
- Wat is mijn volgende stap?
- Loop ik ergens op vast?
- Heb ik hulp of feedback nodig?
 
