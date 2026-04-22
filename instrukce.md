**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
•	Strukturovaný komentovaný HTML5 kód s validní sémantikou
•	Responzivní design (mobile-first přístup)
•	CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
•	Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
•	CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
•	Základní JavaScript pro interaktivitu (na jemné oživení stránek)
•	Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
•	Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
•	Zajisti rychlé načítání a optimalizovaný výkon
•	Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
•	Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
•	Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu

**Základní SEO**
•	Strukturuj nadpisy H1-H6
•	Přidej meta title a description na každé stránce
•	Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
•	Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
•	Urči kanonickou url
•	Obrázkům dej alt popisky
•	Propoj stránky vnitřními odkazy
•	Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)

**Optimalizace obrázků**
•	Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
•	Obrázky ti dodám zkomprimované ve formátu jpg nebo png a webp.

**Vizuální hierarchie a čitelnost**
•	Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
•	Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
•	Čitelné fonty s českou diakritikou, minimální velikost 16px
•	Správné řádkování (line-height 1.5-1.8 pro odstavce)
•	Nikdy nezarovnávej text do bloku
•	Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

**Layout**
•	Šířku celého webu dej na 85% obrazovky
•	Jasné oddělení sekcí a obsahových celků
•	Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
•	Web bude v tmavých tonech
•	Intuitivní navigace - logo vlevo, hamburger menu na mobilu vpravo
•	Dej si záležet na patičce webu
•	U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
•	Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
•	Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
•	Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
•	Stručné a srozumitelné texty
•	Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
•	Vizuální prvky podporující obsah (ikony, obrázky, grafika)
•	Logické uspořádání informací (nejdůležitější nahoře)
•	Chybová stránka (místo „404“ dej ikonu <wa-icon name="face-frown" variant="regular"></wa-icon>) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
•	Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
•	Jednotný styl tlačítek, karet a komponent
•	Stejný padding/margin napříč podobnými elementy
•	Stejné zaoblení prvků
•	Konzistentní ikonografie (používej font awesome, ne emotikony)
•	Stíny karet pouze velmi jemné
•	Jednotný projev značky (brand voice)
•	Konzistentní použití barev napříč celým webem
•	Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
•	Omezený počet barev (2-3 hlavní + neutrální)
•	Primární barva pro CTA (call-to-action) tlačítka
•	Neutrální jemné barvy pro pozadí 
•	Pro text #333333
•	Brand barvy (HEX): 
   - primární: [#e00611]
   - sekundární: [#151828]
   - tlačítka: [[#e00611]
   - background color: [#060913]
   - background secondary color: [#151828]
   - text nadpisy H2-H: [#f2f2f2] v kombinaci s lineárním gradientem linear-gradient(135deg, rgb(249, 6, 18), rgb(244, 106, 37))
   - text body muted foreground: [#818598]
   - text písma na tlačítkách: [#ffffff]

**Fonty**
•	Font pro nadpisy a tlačítka: Oswald
•	Font pro body text: Inter

**Struktura**
•	Jednostránkový web, na další stránce bude objednávkový formulář, který specifikuji
•	Položky menu (Domů, Fitnessčinka, Galerie, Varianty, Kontakt, Koupit

**Další prvky na webu**
•	Vlož Google recenze, Instagram nebo Google mapy
•	Vytvoř kontaktní formulář včetně antispamu (honeypot), doporuč mi službu https://formspree.io/ 

**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg . Vytvoř moderní mobile-first web: použít můžeš trendy jako layout se zaoblenými rohy, velká typografie, barevné gradienty, micro-animace na hover (po najetí na kartu produktu se obrázek zvětší a karta vyjede ve smeru osy „y“), scroll efekty či 3D prvky.
**Moderní design**
•	Barvy: Jemné gradienty, plynulé přechody
•	Prvky: Zaoblené rohy (border-radius 16-24px), jemné stíny, 3D prvky
•	Animace: Mikro interakce na hover, jemné scroll animace 

**obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce 
Obrazky/slider – pro hero sekce atd.
Obrazky/Sluzby – pro Služby
Obrazky/Omne – pro stránku O mně a Patičku
Obrazky/Ikony – vlastní ikony pro web
Prilohy/Menu – polední menu v pdf

**texty**
Na webu použij tyto texty pro jednotlivé sekce . Drž se jich doslova a nic neměň ani nepřidávej. 
1. HERO SEKCE
Label (malý text):
Novinka (color: primary)
Hlavní nadpis:
Fitness činky(color: #f2f2f2) 21–32 kg (color: linear gradient)
Podnadpis:
Fitness – bodybuilding – hobby (color: #f2f2f2)
Popis:
Unikátní tvarové řešení pro procvičení více než 6 svalových partií.
CTA tlačítko:
Zjistit více info
**Poznámky ke styli**
- background: bude backgroudimage
- overlay: tmavsí overly
- zarovnání: text vlevo
 
2. O PRODUKTU (split sekce)
Label:
O co jde?
Nadpis:
Speciální činky na fitness a bodybuilding
Text:
Speciální činky na fitness a bodybuilding. Určeno zejména pro prohřátí svalového hmoty- resp. procvičení před klasickým tréningem.
Nebo je možné pracovat celou dobu s lehkou variantou- formou fitness pro vyrýsování svalů a snížení nadváhy. Těžší varianty jsou určeny především pro bodybuilding a tedy nabrání svalové hmoty.
CTA:
Vybrat variantu

3. BENEFITY (4 boxy)
Box 1:
Vhodné jak pro fitness, tak i bodybuilding
Box 2:
Vyráběno ze základních provedení
Box 3:
Stojan ZDARMA při nákupu všech provedení
Box 4:
Unikátní patentovaný design

4. SVALY / USE CASE
Label:
Které svaly lze posílit?
Nadpis:
Procvičíte více než 6 svalových partií
Text:
Procvičíte více než 6 svalových partií – od břišních, trapézových, prsních, biceps, deltových svalových, až po zádové svaly.
Vždy záleží na intenzitě tréninku. Optimální je vytvořit si vlastní tréninkový plán, který bude pracovat pravidelně každou týdenní část podle zatížení svalové partie. Univerzálnost je vlastností i pro domácí používání není nutné skladovat několik činek a posilovacích zařízení.
Galerie 5-6 fotek: obrazky/content/gallery/01_fitness_cinky (pro nahled), 01_fitness_cinky_b pro otevření do lightroomu

5. PRODUKTY / VARIANTY
Nadpis sekce:
4 varianty produktu
________________________________________
Produkt 1
Název:
Fitness činka 13 kg
Barva:
(žlutá / růžová)
Cena:
3 990 Kč
Popis:
Posílení svalových partií: prsa, trapéz, deltový sval, biceps, triceps, zádové, břišní. Vytvořena také pro bench press.
CTA:
Koupit
________________________________________
Produkt 2
Název:
Fitness činka 21 kg
Barva:
(šedá / černá)
Cena:
5 990 Kč
Popis:
Posílení svalových partií: prsa, trapéz, deltový sval, biceps, triceps, zádové, břišní. Vytvořena také pro bench press.
CTA:
Koupit
________________________________________
Produkt 3
Název:
Fitness činka 27 kg
Barva:
(šedá / černá)
Cena:
6 990 Kč
Popis:
Posílení svalových partií: prsa, trapéz, deltový sval, biceps, triceps, zádové, břišní. Vytvořena také pro bench press.
CTA:
Koupit
________________________________________
Produkt 4
Název:
Fitness činka 32 kg
Barva:
(šedá / černá)
Cena:
8 990 Kč
Popis:
Posílení svalových partií: prsa, trapéz, deltový sval, biceps, triceps, zádové, břišní. Vytvořena také pro bench press.
CTA:
Koupit

6. FULL WIDTH IMAGE / BANNER
Text na obrázku:
CAROL CZ 32KG

7. FOOTER
Logo:
Fitnessčinka
Telefon:
(+420) 736 640 972
Email:
milan.grulich@carolcz.cz
Adresa:
Milan Grulich – Carolcz
Záměl 59, 51743 Potštejn
IČO:
775 82 620
DIČ:
CZ8011354035
Copyright:
Copyright © 2022 CAROLcz
Všechna práva vyhrazena. Kopírování je přísně zakázáno.
