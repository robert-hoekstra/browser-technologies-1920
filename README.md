# Browser Technologies @cmda-minor-web 1920
//Robuuste, toegankelijke websites ontwerpen en maken …

## Feedback punten
3 punten waar ik graag feedback over zou willen hebben:
* Functionaliteit van de applicatie met alleen html5
* Of req.query in de res.render (index.js -> routes) netjes is
* Hoe deploy je gemakkelijk met heroku als je een folder structuur heb zoals ik?

## Nerdy Shirt Creator!
Een applicatie om super nerdy t-shirts te ontwerpen!

### Inhoudsopgave
- [Browser Technologies @cmda-minor-web 1920](#browser-technologies--cmda-minor-web-1920)
  * [Feedback punten](#feedback-punten)
  * [Nerdy Shirt Creator!](#nerdy-shirt-creator-)
    + [Inhoudsopgave](#inhoudsopgave)
    + [Case](#case)
      - [Core functies](#core-functies)
      - [User Experience](#user-experience)
        * [HTML](#html)
        * [CSS](#css)
          + [Fallbacks](#fallbacks)
        * [JavaScript](#javascript)
      - [Probleemdefinitie](#probleemdefinitie)
      - [Progressive Enhancement](#progressive-enhancement)
      - [Feauture Detection](#feauture-detection)
    + [Nice to haves](#nice-to-haves)
    + [Live on Heroku](#live-on-heroku)
    + [Lokaal op eigen machine](#lokaal-op-eigen-machine)
    + [Node & NPM Installeren](#node---npm-installeren)

### Case
De gebruiker kan via een HTML5 form een t-shirt ontwerpen. Dit shirt kan vervolgens uitgeprint worden of opgeslagen als plaatje.
Wanneer de gebruiker de link kopieert die verschijnt bij de preview pagina. Kan de gebruiker deze link op een later moment in de browser plakken om zo weer het shirt op te halen die hij eerder heeft gemaakt.

Alles gebeurd Server Side met Express.JS er is dus geen JavaScript meer nodig aan die client-side!
JavaScript wordt alleen nog maar gebruikt voor de Progressive Enhancement Client Side

[![Image from Gyazo](https://i.gyazo.com/ab897e9c32013b38c67a9b75f154bb2a.png)](https://gyazo.com/ab897e9c32013b38c67a9b75f154bb2a)

#### Core functies
* Navigeren
* Uitprinten
* Formulier invullen
* Later terug komen naar formulier en beginnen waar gebleven
* Ontwerp delen met anderen
* No JavaScript

#### User Experience
Voor de UX heb ik veel gekeken naar de lagen die ik kan toepassen binnen de opdracht. Het idee is om in 3 lagen te werken:

* De Basis
* De Vormgeving
* De Interactie

Vertaalt naar webdesign kom ik dan uit bij:

* HTML
* CSS
* JavaScript

##### HTML
Met HTML heb ik zoveel mogelijk gebruik gemaakt van [CanIUse?](https://caniuse.com).
Can I Use is een online tool waarmee je snel in een overzicht te zien krijgt of een bepaalde webtechniek support heeft van browsers. Ik ben mij zoveel mogelijk gaan focussen op html elementen die in zoveel mogelijk browsers werken. Waarom? vanwege het native gedrag dat elke browser vertoont. Maar ook het aanspreken van elementen gaat moeizaam als een verouderde browsers de elementen omzet naar simpele div's.

Nog een voordeel van semantisch te werk gaan met HTML is dat je met een paar meta tags, attributes en goed gebruik van html elementen al een grote stap hebt gemaakt voor toegankelijkheid. De applicatie is volledig te gebruiken met een toetsenbord en je kunt er prima doorheen navigeren door tab, shift+tab en enter te gebruiken.

Screenreaders kunnen de website ook oplezen in het Nederlands vanwege de lang attribute.

##### CSS
[![Image from Gyazo](https://i.gyazo.com/91036a8b73fa9bfb0558b019833fbaa5.gif)](https://gyazo.com/91036a8b73fa9bfb0558b019833fbaa5)

Met CSS heb ik geprobeerd om zoveel mogelijk affordance toe te voegen op de website. Elementen die kunnen interacteren moeten dat ook uitstralen. Evenals dat de uitstraling moet voldoen aan bepaalde eisen. Zoals voldoende ruimte tussen knoppen. Maar ook een goed contrast en een groot genoeg font om de leesbaarheid te bevorderen.

Met CSS heb ik nog wat aan deep diving gedaan door transities en animaties toe te voegen. Dit zorgt voor een fijnere ervaring van het product!

###### Fallbacks
Ik heb ervoor gezorgd dat de applicatie niet afhankelijk is van bepaalde CSS properties. Hier en daar heb ik een fallback optie geschreven. Het idee is dat je eerst een css property toewijst aan een element die zo breed mogelijk wordt ondersteund. En dat je daarna steeds specifieker en minder breed kan definieren.

Bijvoorbeeld: eerst roepen we het verdana font aan, een font die praktisch door elk systeem als default wordt ondersteund. Pas daarna roep ik een webfont op welke verdana overschrijft mits het systeem dit ondersteunt!

##### JavaScript
JavaScript functionaliteit heb ik zoveel mogelijk op de server afgevangen zodat de gebruiker niet afhankelijk is van JavaScript. De gebruiker kan gewoon gebruik maken van de applicatie en alle core functionaliteit blijven werken zonder JavaScript. Wel heb ik met JavaScript Progressive Enhancement toegepast. Daarover meer verder in de readme.
[![Image from Gyazo](https://i.gyazo.com/f9c9cdb5320d50423b01d1ee06cd1bbe.gif)](https://gyazo.com/f9c9cdb5320d50423b01d1ee06cd1bbe) 

#### Probleemdefinitie
Het probleem van deze case is dat de core functionaliteit van het product het moeten doen op zoveel mogelijk devices en browsers. Dat lijkt makkelijk. Maar dat is het niet. Sommige devices ondersteunen hele voor de hand liggende onderwerpen niet. Of bieden geen toegang tot andere browsers. Of sterker nog, hebben een eigen browser waarvan je niet eens weet waarom, hoe, en waarvandaan.

#### Progressive Enhancement
Progressive Enhancement is een werkmethode waarbij je kijkt naar de basis van jouw applicatie. In principe betekent dat bij webdesign HTML First, JavaScript Second. Er zijn tal websites te vinden online die JavaScript nodig hebben om te draaien. Probeer de website van [KLM](https://klm.com) maar eens te gebruiken om een vliegticket te boeken, zonder JavaScript. Dat lukt je niet.

Door een applicatie op te bouwen met de progressive enhancement gedachtegang. Zorg je er voor dat de applicatie niet afhankelijk is van JavaScript en dus gebruikt kan worden door iedereen die geen JavaScript gebruikt.

Maar wat doe je dan met JavaScript? Progressive Enhancement!
Voor de gebruikers die wel JavaScript ondersteunen kun je JavaScript gebruiken om de gebruikerservaring naar een hoger niveau te tillen. Je kunt functionaliteit binnen de applicatie nog beter maken door JavaScript toe te voegen.

In deze applicatie is het volgende progressive enhanced:
* Service Worker voor offline gebruik
* Font size groter of kleiner maken
* Offline notificatie als de verbinding wegvalt
* Tekst kopieren naar klembord
* Webpagina uitprinten

[![Image from Gyazo](https://i.gyazo.com/97979c8c7da88356f0d9971e99a4eeec.gif)](https://gyazo.com/97979c8c7da88356f0d9971e99a4eeec)

Zoals je kunt lezen zijn het functies die de UX bevorderen. Maar zodra deze functies wegvallen door 'lack of JavaScript' dan kan de gebruiker alsnog de basis van de applicatie gebruiken!

#### Feauture Detection
Feature Detection is een methodiek om te kijken of een gebruiker een bepaalde feature ondersteund. Als de gebruiker het ondersteund, gebruik dan de feature. 

In JavaScript is dat te doen door het volgende:
```JavaScript
if ('functionaliteit' in navigator) {
    // Gebruik dan deze functionaliteit
}

```


Ik gebruik deze zelfde techniek voor mijn service worker:

```javascript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => {
        console.log('Service worker registered! 😎', reg);
      })
      .catch(err => {
        console.log('😥 Service worker registration failed: ', err);
      });
  });
}

```

Wat er staat is als de functionaliteit er is, dan voer je het stukje code uit tussen de curly brackets.

Met CSS kunnen wij precies hetzelfde doen.
In CSS werkt het volgende:

```CSS
@supports(display: flex) {
    section {
        display: flex;
    }
}

@supports not(display: flex) {
    section {
        display: table;
    }
}
```

Ook hier geldt : Support je het? gebruik het dan! Support je het niet? Gebruik het dan niet.


### Tests

##### Lighthouse
Lighthouse is een audittool van Chrome die de website test op UX, A11Y, SEO en performance.
De audit is [Hier](https://github.com/robert-hoekstra/browser-technologies-1920/blob/master/Lighthouse.pdf) te vinden.

##### CanIUse.com
Can I use is een website waar je grotendeels alle webtechnologieen kunt checken. 
De website ik voor bijna alle html, css en javascript elementen gebruikt. Zo kan ik per onderdeel zien hoe de ondersteuning is tussen alle browsers.

##### Try.powermapper
Powermapper is een tool die de hele website met interne links controleerd op UX, A11Y en performance issues.
De audit is [hier](https://github.com/robert-hoekstra/browser-technologies-1920/blob/master/powermapper.pdf) te vinden.

De punten zullen in de toekomst verwerkt worden.


##### 8 Features

* Afbeeldingen uitzetten

Als je de afbeeldingen uitzet binnen de applicatie dan treed er eigenlijk een grote fout op. Je ziet namelijk de preview van jouw shirt niet meer.
Daarom heb ik er voor gekozen om de beschrijving van het shirt te laten zien. Zodat mensen zonder afbeeldingen alsnog een idee hebben wat ze hebben samengesteld.

* Custom fonts uitzetten

Als je de custom fonts uitzet of niet ondersteund dan is dat geen probleem. In CSS heb ik een fallback font gedefinieerd welke door elk device en browsers gerendered kan worden.

* Kleur uitzetten & kleurenblindheid instellen

Met de colorblinding extensiontool in Chrome heb ik de website op kleur en contrast getest. De website bevat naar mijn mening voldoende contrast in elke vorm van kleurenblindheid. Functionaliteit en gedrag is nog steeds goed te onderscheiden.

Echter laat de test van try.powermap.com iets anders zien. En wordt het als usabillity als kritiek punt benoemd. Daar zal ik naar oplossingen moeten zoeken om het contrast nog meer aanwezig te maken. Het vergroten van de borders lijkt mij een gepaste oplsosing.

Maar ook de fontkleur op de achtergrondkleuren kunnen beter

* Muis/Trackpad werkt niet

De website is volledig te gebruiken zonder muis want er is gebruikt gemaakt van de juiste HTML5 elementen. Met Tab, Shift+Tab, Spatie, CMD+C & Enter komt men door de hele applicatie heen.

* Breedband internet uitzetten
 
 Via de developer tools in Chrome heb ik de applicatie getest met 'slow 3g connection'. De website wordt eigenlijk goed gerendered. Wel zit er een korte pauze tussen elke request in naar de volgende pagina. Dit probleem zou ik kunnen tackelen met een loading state die aangeeft dat er een pagina aankomt. In principe zit dit natuurlijk als ingebakken in de browser.

* Javascript (volledig) uitzetten
Als JavaScript uit staat dan kun je nog steeds de applicatie gebruiken. Wel is het zo dat een paar functionaliteiten zoals het vergroten van font-size. Of het uitprinten of snel kopieren van de persoonlijke link niet meer werkt. 

Deze knoppen worden daarom ook alleen maar getoond wanneer JavaScript aan staat in de ideale situatie.

* Cookies niet accepteren
De applicatie maakt geen gebruik van cookies.

* localStorage doet het niet
De applicatie maakt geen gebruik van LocalStorage.



### Nice to haves
* Preview terwijl je het form invult
* Selectie van opties in form weergeven met een kleur ipv tekst
* Instrucies linken aan het maken van een shirt. Dus dat je al begeleidend een shirt maakt!


### Live on Heroku
The applicatie staat live op heroku en wordt gedeployed vanuit deze repo: [bt-shirt-creator](https://github.com/robert-hoekstra/bt-shirt-creator)
De applicatie kan gestart worden door op de link te klikken bovenaan de repo!

### Lokaal op eigen machine

Zorg ervoor dat npm en node geinstalleerd is op jouw device!

* clone repo
* cd opdracht 2
* npm install
* npm run
* navigeer naar localhost:3000 in de browser

### Node & NPM Installeren
[node](https://nodejs.org/en/)
[npm](https://docs.npmjs.com/cli/install)


## Na Feedback van PPK Vrijdag 3 April
### Changes
* Modal wordt alleen getoond mits JavaScript aan, en offline verbinding
* JavaScript DOM elementen worden alleen geschreven als JavaScript aan staat
* Er zijn geen 'hidden' html elementen meer vanwege de transitie van CSS naar JavaScript
* Form element bevat nu kleuren en afbeeldingen. Input types en afbeeldingen die worden ingeladen.
* Preview bevat nu uitgelijnde afbeelding en tekst op shirt
* Nieuwe print stylesheet zodat alleen het shirt wordt uitgeprint
* Installeren van PWA banner alleen zichtbaar met JavaScript (stond nog hardcoded in een handlebars layout :sad: )

# Conclusie
In dit gedeelte van de readme ga ik wat meer in op het vak Browser Technologies en niet zo zeer op de inhoud van het product

## Browser Technologies
Browser Technologies is een vak waar ik ontzettend van genoten heb. Vreemde maar ook vervelende bugs komen naar boven tijdens dit vak vanwege alle browsers die er zijn.
Het vak heeft mij laten zien dat het not done is om grote getallen van gebruikers niet in het ontwerp mee te nemen, omdat 'ze er niet toedoen'.

Super interessante talks zijn er gegeven door zowel Koop als Peter-Paul. Vooral het testen en onderzoeken op verschillende devices en browsers is iets wat ik erg leuk vond aan dit vak. Helaas door het Corona virus was het niet meer mogelijk om dit vaker te doen gezien de Hogeschool van Amsterdam dicht is.

## Leerdoelen
In dit deel van de conclusie behandel ik de leerdoelen van het vak Browser Technologies.

### Progressive Enhancement
Progressive Enhancement is een onderwerp waar ik al vaker mee in aanraking ben geweest bij de opleiding CMD. Het is een manier van ontwerpen waarin je bepaalde features alleen toevoegt om de UX of de performance van een product te verbeteren. Het kan dus niet de bedoeling zijn dat de applicatie niet meer te begrijpen of gebruiken is als deze feature wegvalt.

In de webdesign betekent dat voor mij dat een product eerst volledig in semantisch HTML geschreven moet worden. Met elementen die door elke browser worden ondersteund.

Wanneer de functionaliteiten en informatie goed worden weergeven is het tijd om CSS toe te voegen. Dit vormt de 2e laag op de 1e laag. Ook binnen de CSS vind ik dat je zoveel mogelijk gebruik moet maken van properties die door zo veel mogelijk gebruikers ondersteund worden.

Als de CSS laag is toegevoegd is het tijd om de interactie toe te voegen aan het product. Deze interactie voegen wij toe met JavaScript. En dit is tevens de 3e laag.

De lagen omschrijf ik als:
* Informatie
* Vormgeving
* Interactie

Door bovenstaande methodiek toe te passen in het ontwikkel en ontwerpproces zorg je er voor dat je producten ontwikkeld die door een grote groep ervaren kunnen worden.

### Feature Detection
Feature detection is een methodiek in de webdesign waarbij je gaat kijken of een bepaalde feature aanwezig is in een browser. Als deze feature ondersteund wordt dan gebruikt de browser die. Zo niet dan kan er gebruik worden gemaakt van een fallback.

Feature detection is ontzettend handig als je moet developpen voor een groot publiek. Als ik er een stuk handiger en ervarender in wordt wil ik eigenlijk al mijn producten met feature detects en fallbacks schrijven. Zodat ik voor zoveel mogelijk mensen een goed product kan presenteren.

### Fallbacks
Fallbacks zijn zoals de naam doet vermoeden een soort vangnet voor als een bepaalt onderdeel in je code niet ondersteunt wordt door de browser of device. Met een fallback zorg je er voor dat er wanneer iets niet ondersteund of herkend wordt door een browser, er een (vaak beter ondersteunde) element, functie of property wordt gebruikt die wel door de browser gebruikt kan worden.

Uiteindelijk heeft een browser in de meeste gevallen een default fallback. Als een browser namelijk een bepaalt onderdeel niet begrijpt wordt er vaak een default font, error of styling toegepast. Of helemaal niet. Juist voor dat laatste is het handig om wel fallbacks te gaan gebruiken.

### Toepassing
Ik heb veel meer gebruik gemaakt van fallbacks dan feature detections omdat ik uitgebreid onderzoek heb gedaan naar alle html, css en javascript elementen die ik heb toegepast. Ik heb namelijk technieken gebruikt die vrijwel door elke browser ondersteund worden. 

Progressive enhancement is wel een methodiek waar ik 100% achtersta en wat ik altijd probeer toe te passen in mijn producten.

## Slotwoord
Ik denk dat het een goede manier van ontwikkelen is door altijd met de Progressive Enhancement methodiek te ontwerpen. En niet met graceful degradation. Datzelfde geldt voor met onderdelen werken die zoveel mogelijk worden ondersteund.

Dat geldt natuurlijk niet voor elk project. Sommige projecten worden gemaakt voor een hele kleine groep gebruikers. Of een groep die helemaal niet divers is. Het gebruik van frameworks zorgt er voor dat html css en js steeds meer door elkaar gebruikt worden (en van elkaar afhankelijk worden). Voor sommige projecten is het een uitkomst om met frameworks te werken gezien de community die erbij komt kijken en de productiviteit die te behalen valt. Echter denk ik dat het voor sommige opdrachten niet verkeerd is om gewoon een keer good ol' Progressive Enhancement toe te passen!