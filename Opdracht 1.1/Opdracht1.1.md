# Browser Technologies
## Opdracht 1.1 - Breek het web
Het Web laten 'breken' door features van het platform bewust uit te zetten. Images, custom fonts, JavaScript, kleur, breedband internet.

### Doel van deze opdracht
Het doel van deze opdracht is om erachter komen dat je misschien aannames hebt die niet kloppen, en om je in te laten leven in de eindgebruiker.


### Uitleg
Onderzoek minimaal twee features. Dat betekent uitvogelen wat het voor impact heeft op de sites die je kent en normaal gebruikt. Zoek uit hoe je de feature kan testen. Kies sites in je directe omgeving: van je werkgever, lokale vereniging, de cafetaria om de hoek, en/of eerdere projecten die je zelf gedaan hebt. Onderzoek de problemen, cijfers en/of meningen. Bedenk ook hoe je de problemen zou kunnen oplossen.

1. Afbeeldingen uitzetten
2. Custom fonts uitzetten
3. Kleur uitzetten & kleurenblindheid instellen
4. Muis/Trackpad werkt niet
5. Breedband internet uitzetten
6. Javascript (volledig)
7. Cookies niet accepteren
8. localStorage doet het niet

Optioneel mag je ook één van deze features onderzoeken:
- a. Content blockers
- b. Ad blockers (privacy)
- c. Browser detect

# Research
## BrowserTechnology (Trackpad & JavaScript)

### KLM.COM

#### Trackpad Disabled

Om je trackpad uit te schakelen gebruik je deze simpelweg gewoon niet meer.

Je moet twaalf keer op ‘tab’ drukken voordat er iets weergeven wordt op de website. Er worden langs verschillende anchor elementen genavigeerd die niet zichtbaar zijn.
Het is mogelijk om met alleen je toetsenbord een vliegticket te boeken naar een bestemming naar keuze. Soms duurt het wel erg lang voordat je bij een bepaalt element bent gekomen.
Je kan met alleen het toetsenbord het contrast of de taal aanpassen.
Het is mogelijk om instant naar main content te navigeren. Alleen het is mij niet gelukt om dit effect te reproduceren.
Het is mogelijk om halverwege het proces terug te gaan met shift-tab. Zo kun je bijvoorbeeld ook teruggaan om een ticket te herstellen.
De KLM.COM website is prima te gebruiken zonder muis!
Hover states werken niet meer.
Drag & Drop werkt niet meer

#### JavaScript Disabled
JavaScript kan uitgeschakeld worden door een diep verborgen instelling van Chromium te bereiken. Maar je kunt ook een simpele extensie downloaden die je JavaScript uit en aan kan schakelen. Deze tool is ook te gebruiken voor meerdere opties zoals CSS of Cookies aan en uit te schakelen!

* Zonder JavaScript kun je niet online inchecken
* Zonder JavaScript kun je geen vluchtstatus ophalen
* Zonder JavaScript kun je geen tickets boeken.
* Zonder JavaScript kun je eigenlijk geen klant meer zijn van de KLM. Je bent genoodzaakt op telefonisch contact met ze op te zoeken.
* JavaScript is eigenlijk een noodzaak bij KLM.
* Er staat wel wat informatie op de website maar die is onvolledig geworden.

#### Conclusie
De KLM website is heel erg gefocust op toegankelijkheid en dat is een heel sterk punt. De website is geoptimaliseerd voor slechtzienden, voor mensen met een fysieke beperking en voor mensen die een andere taal spreken dan Nederland & Engels. 

De website werkt totaal niet zonder JavaScript. Ik vind dat zelf geen probleem en ik denk dat de KLM dat ook niet als een probleem ziet. KLM haar doelgroep bestaat namelijk niet uit mensen die geen geld hebben voor een device dat JavaScript ondersteund. Het is een organisatie die juist state of the art wilt zijn met technologieën en focust op

### Gebruik JavaScript

Populaire sites die JavaScript gebruiken.
Google.com
Youtube.com
Tmall.com
Facebook.com
Baidu.com
Qq.com
Sohu.com
Taobao.com
Wikipedia.org
Yahoo.com

95% van alle websites gebruikt JavaScript. Het is niet handig om je website volledig afhankelijk te maken van JavaScript. Maar het is zeker handig om een extra ervaring te bouwen bovenop een robuuste website gebouwd in HTML en CSS.

Afhankelijk van je doelgroep zou ik bepalen welke web-technologieen jij wilt toepassen als ontwikkelaar om voor de eindgebruiker een zo prettig mogelijke gebruikerservaring te creëren. 

### Gebruik TrackPad
Ik heb zelf vaker mezelf gedwongen om te kijken hoe je door je computer heen kunt navigeren met alleen het gebruik van het toetsenbord. Dat beviel me goed maar dat gaat op de website van de KLM ook prima! Je kunt op de website zelfs gebruik maken van de arrow-keys op sommige punten. Bijvoorbeeld bij de kalender overview van op welke dagen je een ticket kan boeken met KLM.

Het navigeren zonder trackpad / of muis ging me goed af. 
Ik denk wel dat het belangrijk is om tegenwoordig bij het ontwikkelen van een website te optimaliseren voor muis, trackpad, voice, touch en screenreader. Er is een te grote diversiteit aan apparaten die gebruik maken van het web. 

Om te optimaliseren voor gebruik van alleen toetsenbord navigatie kan je veel gebruik maken van tab indexes en focus elementen.

Wat ook fijn is is een skip navigatie link. Zo hoeft een gebruiker niet continu door het hele navigatie menu heen.

Het is lastig om iets te optimaliseren voor zoveel diverse gebruikers. Maar het is wel een goede oefening om a11y in al je projecten te verwerken. En rekening te houden met het optimaliseren voor meerdere gebruikers. Zo codeer je uiteindelijk een stuk efficiënter en creëer je steeds minder problemen.