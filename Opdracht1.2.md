# Browser Technologies
## Opdracht 1.2 - Fork je OBA

### Doel van deze opdracht
Het doel van de deze opdracht is leren hoe je een website kan testen in verschillende browsers en devices, en hoe een screenreader werkt.

### Uitleg
Pas Progressive enhancement toe op je OBA Web App. Test de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.

Features:
* Afbeeldingen uitzetten
* Custom fonts uitzetten
* Kleur uitzetten & kleurenblindheid instellen
* Muis/Trackpad werkt niet
* Breedband internet uitzetten
* Javascript (volledig)
* Cookies niet accepteren
* localStorage doet het niet

[OBA APP](https://robert-hoekstra.github.io/project-1-1920/#onderwerp-kiezen)

Test je OBA opdracht op verschillende devices en browsers. Noteer welk device en welke browsers je hebt getest. Je moet je OBA opdracht ook testen op je computer in Chrome, Firefox en .

### Devices
#### HTC Nexus 9
Chrome 80 on a HTC Nexus 9 running Android 7.1.1
String: Mozilla/5.0 (Linux; Android 7.1.1; Nexus 9) AppleWebkit/537.36(KHTML, like Gecko)Chrome/80.0397.132 Safari/537.36

De applicatie van de OBA werkt naar behoren op de Nexus tablet. Je ziet wel dat de navigatie (flexbox) niet helemaal goed wordt weergeven op de tablet. Hij loopt niet netjes door tot aan beide zijdes.

De funcitonaliteiten van de website doen het nog goed en hij blijft zodanig intact dat de applicatie gewoon nog te gebruiken is!

#### Nokia Lumia 620
Mobile Internet Explorer 11.0 on a Nokia Lumia 620 running Windows phone 8.1
Mozilla/5.0(mobile; Windows Phone 9.1; Android 4.0; ARM; Trident/7.0 Touch; rv:11/0; IEMobile/11.0; Nokia; lumia 620) like iphone )S 7_0_3 Mac OS X AppleWebkit/537 (KHTML, like Gecko) Mobile Safari/537

Op deze nokia werkt de applicatie niet. Hij ondersteunt namelijk geen JavaScript en de CSS wordt ook slecht gerendered. De applicatie is ronduit waardeloos op dit toestel.

#### Apple iPod Touch
Safari on an Apple iPod touch running IOS 6.1.3
Mozilla/5.0 (iPod; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version /6.0 Mobile/10B329 Safari/8536.25

De applicatie werkt op deze Apple iPod touch ook niet. Er wordt geen JavaScript ondersteund. De functionaliteit voor routing en fetchen van data ontbreekt.

Ook het renderen van de website gaat niet zoals bedoeld is. Dit heeft hoogstwaarschijnlijk te maken met flex en grid. Die niet worden ondersteund.

### Browsers
![browsers](https://www.maxthon.com/blog/wp-content/uploads/2012/09/maxthon-3-surpasses-safari-on-european-economic-council-browser-ballot-joins-opera-google-chrome-firefox-and-microsoft-internet-explorer-on-the-first-page-1024x576.png)
De browsers waarmee ik de verschillende features ga testen zijn:
* Firefox
* Chrome (Standaard & Development)
* Safari
* Brave
* Opera

#### Device
Bovenstaande browsers zijn geinstalleerd op het volgende systeem:
Modelnaam:	MacBook Pro
  Modelaanduiding:	MacBookPro14,1
  Processornaam:	Dual-Core Intel Core i5
  Processorsnelheid:	2,3 GHz
  Aantal processors:	1
  Totale aantal cores:	2
  L2-cache (per core):	256 KB
  L3-cache:	4 MB
  Hyperthreading-technologie:	Ingeschakeld
  Geheugen:	16 GB
  Opstart-ROM-versie:	204.0.0.0.0
  SMC-versie (systeem):	2.43f7
  Serienummer (systeem):	C02VP0XLHV2F

### Features
De onderdelen die ik ga testen zijn:
* Routing
* JavaScript Fetch
* CSS
* Flexbox
* Grid
* History state
* Hover state

Edit: De 8 onderdelen die ik als basis getest had moeten worden:

* Afbeeldingen uitzetten
* Custom fonts uitzetten
* Kleur uitzetten & kleurenblindheid instellen
* Muis/Trackpad werkt niet
* Breedband internet uitzetten
* Javascript (volledig)
* Cookies niet accepteren
* localStorage doet het niet

#### Chrome (8 features)

Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36

Met de developer tools extensie is het mogelijk om op de volgende onderdelen te testen.

* Afbeeldingen uitzetten
- Als de afbeeldingen uit staan dan werkt de applicatie nog wel maar niet helemaal naar behoren. Het logo van de OBA en de mascotte worden nu weergeven met een can't find image icon en de beschrijving vanuit de alt text. Omdat ik plaatjes heb gebruikt als achtergrond om de onderwerpen toe te lichten zijn deze nu gewoon niet meer zichtbaar. Er is ook geen referentie naar dat er plaatjes hadden moeten staan.

De applicatie moet dus nooit volledig afhankelijk zijn van afbeeldingen. Mits de context dat toelaat.

* Custom fonts uitzetten
Het uitzetten van custom fonts gaat heel makkelijk in Chrome.
Via de inspector ga je naar het tabje 'sources' en daar staat vervolgens alle bestanden die zijn ingeladen. Inclusief het css bestand. In het css bestand heb ik 1 keer font-family gedefinieerd naar 'avenir'. Dat is het font van de OBA. Als je deze uitzet dan rendert chrome automatisch de applicatie met een fallback font.

Het is ook mogelijk om zelf een fallback font in te stellen. Dat doe je door na het eerste font dat je hebt ingesteld een tweede in te stellen. Zo maak je een vangnet voor als het eerste font om wat voor reden dan ook niet beschikbaar is voor de gebruiker van de applicatie.

* Kleur uitzetten & kleurenblindheid instellen
Om te testen op kleurblindheid heb ik de chrome extensie colorblinding gedownload.
[Colorblinding](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa/related)

Met de extensie is het mogelijk om op de volgende soorten kleurblindheid te testen:
* Normaal
* Protanopia (Roodblindheid)
* Deuteranopia (Groenblindheid)
* Tritanopia (Blauwblindheid)
* Protanomaly (Roodzwak)
* Deuteranomaly (Groenzwak)
* Tritanomaly (Blauwzwak)
* Achromatopsia (Geen kleuren)
* Monochromacy (Alles blauwig)

Mijn applicatie bevat niet al te veel kleur. Er wordt wel veel gebruik gemaakt van de rode kleur om aan te tonen dat het om een anchor tag gaat.

Voor iemand die blind is voor deze kleur kan dat een probleem vormen. Je zou in dat geval altijd kunnen kiezen voor kleuren die een mengsel vormen van rood, blauw of groen. Op die manier zorg je er voor dat iemand die niet gevoelig is voor een van die 3 kleuren altijd nog de andere kleur in een object kan zien.

Alleen voor iemand die totaal kleurenblind is is dat natuurlijk geen oplossing. Daarom moet je bovenop bovenstaande oplossing altijd er voor zorgen dat je voldoende contrast hebt op je website om objecten te onderscheiden. En dat je functionaliteit of informatie niet laat afhangen van de kleur. Hier geldt ook: gebruik kleur als progressive enhancement. Maar niet als fundering voor je html.

Semantiek en een hoog contrast zijn je grote vrienden bij het maken van toegankelijke websites voor kleurenblinden.

* Muis/Trackpad werkt niet
Als de muis of de trackpad niet werkt dan kan je gebruik maken van je toetsenbord of van voice control. 

Ik heb mijn applicatie getest met het gebruik van alleen het toetsenbord. Dit is prima te doen omdat ik de juiste html tags heb gebruikt in mijn applicatie.

De elementen die automatisch focus meekrijgen in Chrome zijn:
* Een A element met een href
* Een input, select, textarea, button en file upload
* Een iFrame (ook de focus elementen in het iFrame)
* Elk element met een tabindex.

Ik denk wel dat het belangrijk is om tegenwoordig bij het ontwikkelen van een website te optimaliseren voor muis, trackpad, voice, touch en screenreader. Er is een te grote diversiteit aan apparaten die gebruik maken van het web. 

Om te optimaliseren voor gebruik van alleen toetsenbord navigatie kan je veel gebruik maken van tab indexes en focus elementen.

Wat ook fijn is is een skip navigatie link. Zo hoeft een gebruiker niet continu door het hele navigatie menu heen.

Het is lastig om iets te optimaliseren voor zoveel diverse gebruikers. Maar het is wel een goede oefening om a11y in al je projecten te verwerken. En rekening te houden met het optimaliseren voor meerdere gebruikers. Zo codeer je uiteindelijk een stuk efficiënter en creëer je steeds minder problemen.


* Breedband internet uitzetten
In Chrome kun je heel makkelijk een applicatie testen of deze werkt met langzaam internet. Om langzaam internet na te bootsen ga je naar Inspector > Network > Online > Slow 3G
Dit heet ook wel network throtteling. Je bepaalt nu zelf hoeveel data de browser mag up en downloaden per seconde.

Met langzaam internet merk je dat chrome automatisch alle html, css en javascript inlaadt. Zware plaatjes worden naderhand pas gerenderd. Dat heeft enerzijds een voordeel en een nadeel. Het voordeel is is dat de gebruiker snel gebruik kan maken van de applicatie. Het nadeel is dat belangerijke informatie verborgen kan blijven voor de gebruiker. Maar de opmaak van je website kan ook kapot gaan als deze afhankelijk is van de breedte van plaatjes. Ik raad daarom dan ook aan om een minimale breedte mee te geven aan de container waar het plaatje in staat.

Verder is het verstandig om er voor te zorgen dat je website of applicatie werkt met standaard HTML en CSS. Dit wordt namelijk in die volgorde ingeladen. JavaScript is een taal die als laatste wordt ingeladen op basis van de plaatsing in de DOM.

Je kunt daarom JavaScript het beste aan het einde van de body plaatsen of in de head met het 'defer' attribuut. Hierdoor rendert de browser JavaScript pas als de HTML en CSS ingeladen zijn. Zo kijkt de gebruiker niet lang naar een wit scherm maar kan die gelijk aan de slag!

Het is ook een goed idee om jouw applicatie te voorzien van loading states. Deze helpen bij het informeren van de gebruiker waar de applicatie op dat moment mee bezig is.

* Javascript (volledig)
JavaScript is in Chrome uit te schakelen via de geavvanceerde instellingen. Wanneer je JavaScript op mijn applicatie uitschakelt dan werkt de applicatie niet meer naar behoren. Er wordt geen data opgehaald en het navigeren werkt ook niet meer. Het navigeren is namelijk volledig afhankelijk van routing.

Een oplossing hiervoor is om JavaScript ALTIJD als progressive enhancement te gebruiken. En om zoveel mogelijk te schrijven met native HTML en CSS. Wanneer je applicatie zonder JavaScript werkt heb je namelijk een veel bredere support!

* Cookies niet accepteren
Bij mijn applicatie gebruik ik geen cookies. Om het gebruik van cookies te testen ben ik naar de volgende website gegaan:
[https://www.telegraph.co.uk](https://www.telegraph.co.uk/travel/ski/articles/everything-you-need-to-know-about-late-season-skiing/)

In de footer ontstaat gelijk al een melding om cookies te accepteren of in te stellen.

Ik heb er voor gekozen om geen van beiden te kiezen en gewoon op de website verder te gaan met artikelen lezen en te navigeren. Dit werkt eigenlijk prima.

Je merkt wel als je de cookies accepteert en als je een pagina refresht. Je een paar seconde de tijd hebt om een artikelen te lezen voordat jouw cookie geprobeert wordt uit te lezen. Wanneer de cookie is gevonden en uitgelezen ziet de website dat ik geen abbonement heb op de krant. En dan ontstaat er een 'Start your free trial' melding bonvenop het artikel en wordt het artikelen onleesbaar gemaakt.

Ik denk dat het een goede oplossing is van de telegraph door de gebruiker toegang te geven tot het instellen van de cookies en tot het accepteren (en negeren) van de cookies.

Een andere oplossing was namelijk geweest om alle artikelen in een premium omgeving te plaatsen waar alleen mensen met login gegevens kunnen komen. Dat zou slecht zijn voor de vindbaarheid van de krant. En daarom hebben zij denk ik niet voor die oplossing gekozen.

* localStorage doet het niet
Het uitschakelen van LocalStorage gaat gepaard met het uitschakelen van de cookies. Het is niet mogelijk in chrome om deze afzonderlijk van elkaar te blokkeren.

In mijn applicatie maak ik geen gebruik van localstorage of cookies. Ik ben daarom naar de website van tweakers gegaan. Een website waar je normaal wordt doodgegooid met reclame.

[Tweakers](https://Tweakers.net)

Lang verhaal kort: Deze website doet niks zonder de cookies te accepteren. Wanneer je de cookies probeert te accepteren (maar deze via de instellingen weigert) kom je op een pagina terecht die een foutmelding geeft. Tweakers is dus onbruikbaar zonder cookies.

[Skyscanner](https://www.skyscanner.nl)
Skyscanner is een website die wel te gebruiken is zonder cookies. Je krijgt alleen bij elke keer dat je gaat navigeren de optie om weer de cookies te accepteren. Wanneer je de cookies 'accepteert' gebeurt er vrij weinig en kan je verder gaan met waar je bezig was op de website.

Eigenlijk best handig! Zo kun je altijd voor de laagste prijs vliegen zonder dat de prijs is afgestemd op jouw cookies.

Maar nee! Als je doorgaat met het boeken van een ticket bij bijvoorbeeld vueling.com dan houdt de pret op en wordt je geweigerd omdat je geen cookies accepteert.

Ik denk dat het goed is om altijd de gebruiker te informeren wat er gedaan wordt met cookies. Maar ook wat er gebeurd als je cookies weigert. Tweakers doet dat bijvoorbeeld heel goed. Het geeft je tips over waar waarschijnlijk een probleem ligt. Skyscanner geeft je deze melding helemaal niet en dan gaat de browser pas op z'n nek als je wordt geredirect naar een ander domein die geen ondersteuning biedt voor cookieloze computers.


#### Firefox

Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:74.0) Gecko/20100101 Firefox/74.0

* Routing
Routing werkt naar behoren. Je kunt op de anchor elementen navigeren. Maar je kunt ook weer terug via native browser functionaliteit.

* JavaScript Fetch
De data wordt naar behoren opgehaald. Geen fouten opgemerkt en het gaat ook snel!

* CSS
De opmaak verschilt nauwelijks tot niets in vergelijking met Chrome. De browser waar ik de applicatie in heb gebouwd.

* Flexbox
Flexbox wordt ondersteund in firefox. De items in de navigatiebalk schalen mee en dat is exact wat er moet gebeuren.

* Grid
Grid wordt ondersteund in firefox. De items in het gridschalen mee en dat is exact wat er moet gebeuren. Zie geen verschil met Chrome.

* History state
Terugnavigeren ondanks de routing met JavaScript doet het prima. 

* Hover state
Hover states werken naar behoren. CSS transities worden ondersteund en properties worden goed ingeladen en aangepast.

#### Opera

Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36 OPR/67.0.3575.79

* Routing
Routing werkt niet als je terug wilt in opera. Dit moet dus opgelost worden.

* JavaScript Fetch
Werkt goed

* CSS
Geen vreemde dingen gezien. Ziet er goed uit.

* Flexbox
Navigatie flext prima mee.

* Grid
Grid schaalt ook goed mee.

* History state
Dit werkt dus niet zo goed.

* Hover state
Werkt prima.

#### Safari

Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Safari/605.1.15

* Routing
Routing werkt half in safari. Naar pagina's toe navigeren werkt prima. Maar op het moment dat je terug wilt gaan via de native terug gaan functie van safari wordt de pagina vaak verkeerd laten zien. Je krijgt namelijk heel even de homepagina te zien. Maar deze schakelt al gauw weer terug naar de route waar je vandaan kwam

* JavaScript Fetch
De data wordt naar behoren opgehaald. Geen fouten opgemerkt en het gaat ook snel!

* CSS
Ik merk dat er in safari veel meer ruimte is tussen blok elementen.
Wat opvallend is bij safari is dat de pagina rendering super smooth gaat! Het resizen van de viewport gaat zo soepel dat je de frames niet eens meer kan zien. Dat is bij Firefox en Chrome wel het geval.

* Flexbox
Flexbox lijkt goed te werken in safari. De navigatie schaalt netjes mee bij het resizen.

* Grid
Grid wordt ondersteund in safari. De items in het gridschalen mee en dat is exact wat er moet gebeuren. Zie geen verschil met Chrome.

* History state
Zoals beschreven bij routing: 
"Maar op het moment dat je terug wilt gaan via de native terug gaan functie van safari wordt de pagina vaak verkeerd laten zien. Je krijgt namelijk heel even de homepagina te zien. Maar deze schakelt al gauw weer terug naar de route waar je vandaan kwam"

* Hover state
Hover states werken naar behoren. Geen verschil gezien met andere browsers.

#### Brave

Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36

Brave is gebouwd op Chromium en dat merk ik ook bij het testen van mijn applicatie. De applicatie werkt zelfs een stuk sneller voor mijn gevoel dan bij native Chrome!

* Routing
Perfect

* JavaScript Fetch
Perfect

* CSS
Perfect

* Flexbox
Perfect

* Grid
Perfect

* History state
Perfect

* Hover state
Perfect

## Screenreader
Ik heb mijn applicatie laten oplezen door gebruik te maken van VoiceOver dat bij Catalina zit op de Macbook Pro.

Met voice-over is het mogelijk om door de website te navigeren met de volgende toetsen:
* Tab om naar het volgende navigatie/focus element te gaan
* Shift-Tab om naar het vorige navigatie/focus element te gaan
* Enter om naar de href te navigeren van een element
* Control + Options + Spatie om voice over de instructie te geven om een element te activeren.
* Ik maak gebruik van lijsten in mijn applicatie en dat bevorderd de tab index en het opnoemen van de elementen enorm.

## Oplossingen en verbeteringen
### Voice
Ik zou mijn applicatie kunnen verbeteren op voice op de volgende punten:
* Het ondersteunen van arrowkeys
* Het ondersteunen van goede alt text op afbeeldingen
* Het gebruiken van inline html afbeeldingen in plaats van css afbeeldingen die een achtergrond vormen.
* Een skip to content sectie zodat je niet telkens door de navigatie heen hoeft te scrollen.
* HTML semantiek sterk doorvoeren
* Headinglevels moeten goede omschrijvingen hebben van de content die ze representeren
* Sommige screenreaders hebben een optie om alleen alle links op een pagina op te noemen. Het is dus belangerijk om gewoon een anchor tag te gebruiken in plaat van een button als dat niet nodig is. Tevens moet de Anchor tag voorzien zijn van een normale beschrijving. Dus geen 'klik hier'
* Omdat screenreaders van boven naar onder werken van links naar rechts. Ben je snel geneigd om met tab indices te werken maar dat is in essentie een bad practice omdat je hier mee het native HTML gedrag beinvloedt. Wat beter is is om de belangerijke content bovenaan te plaatsen zodat deze zo dicht mogelijk aan het begin van het bereik van een screenreader ligt.
* De conclusie/kernzin van een paragraaf altijd aan het begin van de paragraaf schrijven. Zo weet iemand die een screenreader gebruikt gelijk of hij de content interessant of saai vindt.
* Page titels. Het schrijven van een titel is een kleine moeite. Maar absoluut geen overbodige luxe voor mensen die screenreaders gebruiker.

### Browser Support
Er zijn ontzettend veel verschillende browsers. En sommige heb ik nog niet eens getest. Sommige browsers zijn gebasseerd op Chromium. Wat de backbone is van Google Chrome. Je ziet dan ook dat veel dingen op dezelfde manier gerendered worden zoals ik dat in Chrome gewend ben. Maar niet elke browsers werkt op die manier!

Internet Explorer is bijvoorbeeld een browser die veel css properties niet ondersteund. Of anders interpeteert dan Chromium browsers.

Om daar rekening mee te houden is het voor JavaScript development sowieso goed om te kijken of JavaScript ondersteunt wordt. En welke ECMAscript versie gehanteerd wordt.

Op MDN en Can I Use This staat altijd goed beschreven hoe iets van JavaScript toegepast kan worden en welke browsers het supporten.

Je kunt bijvoorbeeld kijken of de fetch method ondersteunt wordt in een browser.

Maar datzelfde geldt ook voor CSS!

Op de website van Can I use this kun je ook kijken of een bepaalde CSS property ondersteund wordt.
[MDN](https://developer.mozilla.org/nl/)
[Can I use this.com](https://caniuse.com/)

#### Verbeteringen
Ik denk dat het belangerijk is om goed te kijken welke properties er door het gross van de browsers gesupport wordt. Ik ben zelf een voorstander van het ontwikkelen voor de grotere browsers. Maar ik kan begrijpen dat voor sommige doeleinden het belangerijk is om te ontwikkelen voor minderen browsers.

Om de applicatie te optimaliseren heb ik een lijst opgesteld van wat ik met de OBA applicatie beter kan doen:

* Fallback Fonts
* Fallback CSS
* Reset CSS bovenaan CSS file
* Fallback schrijven voor Flex en Grid
* Deep diven in routing zodat dit beschikbaar is voor elke browser.
* JavaScript eventueel in ES5 schrijven voor een bredere support
* JavaScript als progressive enhancement gebruiken en niet als fundering van de website.
* Semantiek voorop. Opletten met bepaalde HTML5 tags. Sommige tags worden namelijk standaard omgezet naar div's in IE. Wat weer betekend dat je CSS zou breken.
* Classes en ID's gebruiken om bovenstaande zo veel mogelijk te voorkomen.
* Afbeeldingen in HTML inladen en niet via de CSS als background.
* History State optimaliseren/ aanspreken in alle browsers.




