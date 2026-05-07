# API Project WDD

## Checkout 1-4-2026
Vandaag ben ik begonnen met het maken van een idee voor het project. 
Ik wil graag de spotify API combineren met een videogame API waarbij ik op basis van een game genre aan de hand van web AI
een aantal nummer suggesteer, waarmee de gebruiker kan zeggen of hij/zij deze in de playlist wil.

## Weekly Checkout 2-4-2026
Na het gesprek met mijn clubje en Cyd ben ik tot de conclusie gekomen dat de beste eerstvolgende stap is:
Het toevoegen van de Spotify/playlist functionaliteit zonder dat dit gekoppeld is aan de web AI of videogame API

## Checkout 8-4-2026 
Vandaag heb ik button components gemaakt voor mijn website en Icon components, hier ben ik zo'n 3.5 uur mee bezig geweest.
Ook heb ik dummy songs toegevoegd voor tijdens het developen, omdat ik er tegenaanliep dat ik een timeout kreeg van de spotify api :(
Morgen wil ik verder gaan met het maken van het song component en het playlist component.

## Checkout 9-4-2026
Vandaag heb ik de Document Picture in Picture web api gebruikt om een iframe in te laden wanneer een liedje wordt afgespeeld.
Om het geselecteerde nummer duidelijker te maken heb ik een animatie toegevoegd met een variabel font en en kleur gegeven aan het nummer.
Omdat ik er gister tegenaanliep dat ik een timeout kreeg heb ik voor de zekerheid een lijst met dummy liedjes toegevoegd voor tijdens het ontwikkelen.

<img src="public/images/voortgang1.png" />

## Weekly checkout 10-4-2026
Vandaag heb ik feedback ontvangen op mijn werk wat ik tot nu toe heb.

Volgende week wil ik gaan kijken naar: 
- Het implementeren van een spotify player die de liedjes automatisch afspeelt en deze in de PiP zetten.
- OF een playlist in de PiP zetten.
- OF een playlist ergens anders op de pagina zetten die in realtime update als je iets toevoegt.
- Een 'add playlist to spotify button' toevoegen zodat ik niet meerdere calls iedere keer naar de spotify api doe, maar 1 call doe.
- Inspiratie opzoeken en kijken naar andere web players.

## Checkout 22-4-2026
Vandaag heb ik een vinyl en animatie toegevoegd voor wanneer een lied begint af te spelen. Ook heb ik met Cyd besproken dat het handig is om meer inspiratie op te doen online.
Dit ben ik gaan doen en ik heb andere kleuren toegepast en ik ben het design mooier gaan vinden.
Verder heb ik mijn hele lay-out omgegooid.

## Checkout 23-4-2026
Vandaag ben ik begonnen aan mijn detailpagina's. Ook ben ik begonnen met het maken van view transitions voor het scrollen tussen liedjes.
Ook heb ik met Cyd gepraat waarna zij mij het advies gaf om mijn website en flow uit te tekenen zodat het voor mij ook logisch is hoe ik mijn website wil maken.
Ik wil nog ontzettend veel toevoegen; van styling naar functionaliteit. 

## Weekafsluiting 24-4-2026 
Vandaag heb ik de logica van het dynamisch routen weer geheel op de server gezet. Het was zo niet verstandig om dit op de client side te doen.
Verder heb ik gesproken over de UI van mijn project met Cyd en Melvin. Ik wil namelijk nog een hoop toevoegen voordat ik tevreden ben. Ook mis ik nu nog allebei de web api's maar ik weet wel hoe ik deze wil implementeren.
Ik wil een Document PiP voor een playlist en een localstorage om liedjes te saven.
Met die localstorage kun je daarna gelijk een aantal liedjes toevoegen aan de playlist i.p.v. deze een voor een te sturen.

Ook wil ik meer kijken naar de visual hierarchy van mijn website, omdat dit nog niet erg duidelijk is.

## Laatste loodjes
Tijdens de vakantie en laatste week heb ik mijn website samengevoegd tot één geheel. Ik heb de localstorage en document PIP web API's toegevoegd aan mijn project.

Het leek mij handig om een document PIP te maken van de playlist, zodat je deze open kan hebben terwijl je niet op de website zelf zit.
In het document PIP laad ik een iFrame in wat ik ophaal uit de Spotify iFrame API. Als het document PIP gesloten is, dan is de iframe hidden in het `<MainLayout>` component. Dit heb ik op deze manier gedaan omdat dit het aantal API calls beperkt en de website sneller maakt.

Verder gebruik ik nu localstorage om een array van liedjes op te slaan. Zodat deze liedjes met één knop toegevoegd kunnen worden aan de geselecteerde playlist.

Verder heb ik de website responsive gemaakt en de UI naar mijn idee verbeterd.

# Bronnen 

- Claude AI voor het besturen van de song iFrame -> https://claude.ai/share/8eedb4a4-9670-44f5-a079-bd85e8e2c486
- Gemini voor spotifyLogin.js & callback.js.
- Claude AI voor de string splitter van de h1 in `<MainLayout>`.
- Inladen van svg Icons in buttons -> Cyd en stack overflow https://stackoverflow.com/questions/76985138/any-way-to-init-an-astro-component-by-string
- Gebruik custom dispatch event in mainLayout bij de iframe callbacks met behulp van Claude AI -> https://claude.ai/share/e9a554ec-32c7-49c9-98f6-5cae9f4c2a1d
- `define:vars` -> https://www.answeroverflow.com/m/1157809781357154355

# Stijl inspiratie
View transitions als nummer naar playlist gaat,
Document pip voor playlist weergave

Na het maken van de projecten voor CSS en BT, ben ik er achter gekomen dat het handig is om eerst een moodboard te maken.
Hierdoor denk ik bewuster na over wat ik ga maken en of het bij de stijl past. Hier vind je mijn inspiratiebronnen voor dit project.

https://www.sensorvariablefont.com/variable-font-reacts-to-music/
https://vimeo.com/809461900?fl=pl&fe=sh

## fun fonts: 
https://fontesk.com/furnitur-font/  
https://fontesk.com/kikuta-font/  
https://fontesk.com/bitcount-typeface/  
https://fontesk.com/that-then-this-font/
https://fontesk.com/mini-mochi-font/   
https://fontesk.com/ojuju-font/

# Commands

* `npm install` → installs dependencies
* `npm run dev` → starts development server
* `npm run build` → builds the app for production
* `npm run preview` → previews the production build locally
* `npm run start` → starts the app on the correct port (for deployment)
