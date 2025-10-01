# Ontwerpkeuzes Tourguide App

Dit document beschrijft de ontwerpkeuzes die zijn gemaakt voor de Tourguide App.

## 1. Visuele Stijl

### Kleurenpalet

- **Primair (Indigo):** Gebruikt voor belangrijke acties, links en de huisstijl. Straalt vertrouwen en rust uit.
- **Secundair (Groen):** Gebruikt voor positieve acties zoals het aanmaken van een account of het starten van een route.
- **Achtergrond (Zachtblauw/Grijs):** Een lichte, neutrale achtergrond (`#f0f4f8`) om de inhoud duidelijk naar voren te laten komen.
- **Tekst (Donkergrijs):** Goed leesbare, donkergrijze tekst (`#334155`) voor een prettige leeservaring.

### Typografie

- **Lettertype:** `Inter` is gekozen als het standaard lettertype. Het is een modern, goed leesbaar en schaalbaar lettertype dat geschikt is voor interfaces.
- **Kopteksten:** `font-bold` en `font-semibold` worden gebruikt om hiërarchie aan te brengen in de titels en secties.

### Iconografie

- **Lucide Icons:** Een moderne en consistente iconenset die de visuele taal van de app versterkt. De iconen zijn strak, herkenbaar en schaalbaar.

## 2. Layout en Structuur

- **Tailwind CSS:** Gekozen voor een snelle en responsieve ontwikkeling. Het utility-first karakter maakt het eenvoudig om consistente en aanpasbare componenten te bouwen.
- **Container:** De hoofdinhoud is gecentreerd en heeft een maximale breedte van `1200px` voor een optimale leesbaarheid op grotere schermen.
- **Kaart-gebaseerde Layout:** Routes en andere content worden gepresenteerd in kaarten (`cards`) met afgeronde hoeken en een lichte schaduw. Dit zorgt voor een georganiseerde en visueel aantrekkelijke weergave.
- **Navigatiebalk:** Een duidelijke en consistente navigatiebalk bovenaan elke pagina biedt gemakkelijke toegang tot de belangrijkste secties van de app.

## 3. Interactie en Feedback

- **Hover-effecten:** Knoppen en links hebben duidelijke `hover`-effecten (kleurverandering, schaduw) om de interactiviteit te benadrukken.
- **Pop-ups:** Belangrijke meldingen, zoals het ontdekken van een `Point of Interest` (POI), worden weergegeven in een pop-up om de aandacht van de gebruiker te trekken.
- **Feedback bij Acties:** Na een actie, zoals het kopiëren van een link, wordt een subtiele melding getoond om de gebruiker te informeren dat de actie is geslaagd.

## 4. Technologieën

- **HTML5:** Voor de semantische structuur van de webpagina's.
- **Tailwind CSS:** Voor de styling en layout.
- **JavaScript:** Voor de interactiviteit, zoals de pop-ups, sterrenbeoordeling en de Web Share API.
- **Lucide Icons:** Voor de iconografie.
