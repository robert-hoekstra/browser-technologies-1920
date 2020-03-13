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
De browsers waarmee ik de verschillende features ga testen zijn:
* Firefox
* Chrome (Standaard & Development)
* Safari
* Brave

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
Hover states werken naar behoren. CSS transaities worden ondersteund en properties worden goed ingeladen en aangepast.

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

## Oplossingen en verbeteringen
Ik zou mijn applicatie kunnen verbeteren op voice op de volgende punten:
* Het ondersteunen van arrowkeys
* Het ondersteunen van goede alt text op afbeeldingen
* Het gebruiken van inline html afbeeldingen in plaats van css afbeeldingen die een achtergrond vormen.
* Een skip to content sectie zodat je niet telkens door de navigatie heen hoeft te scrollen.

