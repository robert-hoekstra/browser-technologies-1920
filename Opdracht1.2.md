# Browser Technologies
## Opdracht 1.2 - Fork je OBA

### Doel van deze opdracht
Het doel van de deze opdracht is leren hoe je een website kan testen in verschillende browsers en devices, en hoe een screenreader werkt.

### Uitleg
Pas Progressive enhancement toe op je OBA Web App. Test de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.

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

#### Chrome
In chrome werken alle bovenstaande punten. De applicatie is namelijk ontwikkeld met het oogpunt dat het moet werken in Chrome op een macbook.

#### Firefox
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

## Oplossingen en verbeteringen


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




