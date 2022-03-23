
<ol>


## <li>Áttekintés.</li>


<p>A projekt célja, hogy egy olyan Webes e-learning felületet valositsunk meg, ami könnyen kezelhető a felhasználok számára, illetve áttekinthető felülettel tálákozzon bármely látogató. 
</p>

<p>Az e-learning felületen elérhető legyen minél több funkció, regisztráció, bejelentkezés, sötét/világos kinézet, kurzusok választása, áttekintése, tesztek választása és kitöltése is.   
</p>

<p>A külömböző kurzusok teljesen függetlenek egymástól. A fő cél, hogy egyszerre több kurzus is élérhető legyen, bármely regisztrált felhasználó számára. 

</P>


## <li>Jelenlegi helyzet.</li>

<p>A mai világban minden oktatási központnak megvan a saját e-learning portálja, melyek sokban nem különböznek egyszerű és egyértelmű kinézettel/funkciókkal rendelkeznek. 
<p>A mi felületünk ebben különbözik, szeretnénk egy kicsit modernebbé és egyben kicsit érdekesebbé tenni egy hétköznapi program működését és használatát. A plusz beépített funkciók választási lehetőséget adnak a felhasználó számára. Ha a felhasználó bejelentkezett az ehhez tartozó felületen illetve regisztrált, ha új felhasználóról van szó.
<p>Ezek után teljes egészében használhatja a felület minden funkcióját, megtekintheti, a hozza tartozó kurzusait és ahhoz tartozó leírásokat és teszteket is akár, és e mellet például: hogy épp milyen módban szeretné használni a felületet sötét illetve világos módban.


</p>

## <li>Vágyálom rendszer</li>
<p>A project célja, hogy egy olyan felületet valósítsunk, meg ami mind funkcionálisan és tartalmilag is segítse a felhasználót a tanulásban. A felület egy weboldal formájában fog működni, melyen a felhasználó be tud jelentkezni illetve regisztrálni is tud, ha szeretne. 
<p>Természetesen bejelentkezés nélkül is látogatható az oldal viszont ilyen formában csak főoldal és egyéb információs lehetőségek elérhetők a felhasználó számára. De viszont ha a felhasználó bejelentkezik, akkor az oldal teljes működési opcióit tudja használni.   

</p>

## <li>Funkcionális követelmények
<ol>
<li> Regisztráció
<ul>
 <li> Ezen a felületen tud regisztrálni a felhasználó.</li>
</ul>
</li>
    <li> Bejelentkezés </li>
<ul>
 <li> Ezen a felületen tud bejelentkezni a felhasználó az oldal teljes használatához.</li>
</ul>
    <li> Főoldal </li>
<ul>
 <li>Ha felhasználó bejelentkezik illetve vendégkent látogat, az oldalra akkor ez az oldal jelenik meg alapértelmezetten.</li>
</ul>
    <li> Kurzusok </li>
    <ul>
 <li>Bejelentkezés után a felhasználó ezen a fülön tudja meg tekinteni a saját kurzusait illetve itt választhatja ki ha bele szeretne menni az egyikbe</li>
</ul>
    <li> Kurzus áttekintés </li>
    <ul>
 <li>A kurzus kiválasztása után a felhasználó itt láthatja a kurzus leírását, tananyagjait, csatolt dokumentumokat, illetve teszteteket</li>
</ul>
<li> Hatáskörök </li>
    <ul>
 <li> Admin: Ezzel a hatáskörrel mindent lehet szerkeszteni, módosítani, törölni. Illetve egyedi beállítási lehetőséggel is rendelkezik </li>
 <li> Vendég: Megtekintheti az oldalt használhat néhány funkciót illetve elolvashatja az alapértelmezett információs részeket.</li>
 <li> Felhasználó: Meg tudja nyitni a saját kurzusokat illetve a bennük szereplő információkat, és teszteket is megtekintheti illetve ki is töltheti őket majd áttekintheti a megoldásokat és eredményket.</li>

</ol>


## <li>Jelenlegi üzleti folyamatok modelje</li>
    5.1 A kurzusokhoz kapcsolódó adatok rendszerezése
            5.1. Új kurzus választása.
                    5.1.1 Regisztrált felhasználó végzi
                    5.1.2 A kurzus tulajdonosa engedélyezi a csatlakozást.
            5.2. Hozzáadott kurzushoz való áttekintés.
                    5.2.1 Regisztrált felhasználó végzi
                    5.2.2 Láthatók a kurzussal kapcsolatos információk, csatolmányok és tesztek.
            5.3 Adott felhasználó által kitöltött tesztek.
                    5.3.1 Regisztrált felhasználó végzi
                    5.3.2 A teszthez tartozó válaszok és megoldások láthatóak.
            5.4 Adott felhasználó által kitöltött tesztek válaszainak törlése
                    5.4.1 Admin felhasználó végzi
                    5.4.2 Az adott teszthez tartozó megoldások törlése

## <li>Igényelt üzleti folyamatok modelje</li>
    6.1 Bejelentkezés
        6.1. Kurzosok megtekintése
                6.1.2 Új kurzus hozzáadása
                6.1.3 Kiválasztot kurzus leírásának megtekintése
                6.1.4 A csatlakozott kurzushoz általam hozzáadatt dokumentumok leírások modosítása
                6.1.5 A csatlakozott kurzushoz általam feltöltött dokumentumok, leírások törlése
        6.2 Kijelentkezés
        6.3 Bejelentkezés nélküli felhasználók hatáskörei:
        6.3.1 Alapértelmezett funkciók használata
                6.3.2 Sötét, világos mód váltása
                6.3.3 Föoldal, menük megtekintése illetve alapértelmezett informáciok áttekintése.
        6.4 Regisztráció
        6.5 Tesztek eredményének megtekintése % illetve pont arányban. 

## <li>Követelmény lista</li>


|Modul|ID|Mév|Kifejtés|
|--------------------|-------------|---------|---------------|
|Adminisztráció|K1|Kezdőoldal|Az oldal amit a felhasználó alapértelmezetten lát miután be lépet az oldalra. Itt elérhetőek a kölünböző lehetőségek, mint a Kurzusok, Regisztráció, Bejelentkezés. |
|Adminisztráció|K2|Regisztráció|A felhasználó itt tud regisztrálni az oldalra. Szükséges a felhasznaló neve és jelszava.|
|Adminisztráció|K3|Bejelentkezés|A felhasználó itt tud bejelentkezni. Ide a felhasználó nevét és Jelszavát kell megadnia.|
|Felület|K4|Kurzusok|Itt lehet megtekinteni a saját kurusokat.|
|Felület|K5|Kurzosok modosítása|Új kurzus felvétele esetlegesen régi kurzus törlése.|
|Felület|K6|Tesztek|Itt lehet a megadott teszteket kitölteni illetve ellenőrizni.|
|Felület|K7|Tesztek megoldásainak áttekintése|Ezen a részen tekinthetjük meg a teszt eredményet % illetve pont formájában.|
|Felület|K8|Dokumentumok feltöltése/letöltése| Ezt a folyamatot csak akkor lehet használni ha a kurzus tulajdonosa engedélyezi és láthatová teszi.|


## <li>Fogalom szótár</li>

<ul>
<li><strong>[Adminisztráció]</strong>: Olyan felület ahol a felhasználó valamilyen adatát megkell hogy adja.</li>

<li> <strong>[Felület]</strong>: Olyan oldal, amellyel a felhasználó képes interaktiválni és megváltoztatni.

<li> <strong>[HTML, CSS, JAVASCRIPT, SQL]</strong>: Programozási nyelvek, amelyben képesek vagyunk elkészíteni a programot.

<li> <strong>[Modul]</strong>: Ez alapján különböztetjük meg, hogy milyen fajtáú egy követelmény.

<li> <strong>[ID]</strong>: Az adott követelményhez tartozó azonosító, amivel könnyen megtalákható.

<li> <strong>[BUG]</strong>: Fejlesztési hiba ami által a program nem a várt eredményt ad vissza.

<li> <strong>[Backend]</strong>: A kiszolgáló, ahonnan az alkalmazást el lehet érni.

<li> <strong>[Frontend]</strong>: Egy réteg ami feladata a rendszerből kijutó adatok prezentálása, illetve a bejövő adatok fogadása.

<li> <strong>[Web-service]</strong>: Különböző programnyelveken írt és különböző platformokon futó szoftveralkalmazások interneten keresztül történő adatcseréjére használt webszolgáltatások.

<li> <strong>[Multiplatform]</strong>: Több környezetben futtatható alkalmazás.
</ul>
</ol>
