
# Könyvtár Kezelő Alkalmazás

Témakörök:
- gyakorlati programozás
- egységtesztelés gyakorlására
- tiszta kód elveinek alkalmazására.



## Leírás

Fejlessz egy egyszerű könyvtár kezelő alkalmazást, amely lehetővé teszi a felhasználók számára, hogy könyveket adjanak hozzá, töröljenek és listázzanak.

## Feladatok

1. **Könyv hozzáadása:** Felhasználók új könyveket adhatnak hozzá egy űrlap segítségével.
2. **Könyvek listázása:** Az alkalmazás jelenítse meg a hozzáadott könyveket listaként.
3. **Könyvek törlése:** Felhasználók törölhetik a könyveket a könyvtárból.

## Egységtesztek

- **Könyv hozzáadása:** Teszteld, hogy a könyvek hozzáadása a várt módon történik-e.
- **Könyvek listázása:** Ellenőrizd, hogy a listázás helyesen jeleníti meg a hozzáadott könyveket.
- **Könyvek törlése:** Teszteld, hogy a törlés funkciója megfelelően működik-e.

## Tiszta kód elvek

Az alábbi tiszta kód elvek betartása segít a kód minőségének és karbantarthatóságának javításában:

- **Megfelelő névadás:** Használj beszédes neveket a változókhoz és függvényekhez.
- **Rövid függvények:** Bontsd le a feladatokat kisebb, egyszerűen érthető függvényekre.
- **Kommentek:** Ha szükséges, használj kommenteket az összetettebb részek vagy magyarázatok esetében.
- **Duplikált kód elkerülése:** Ne ismételd meg ugyanazt a kódot többször, hanem használj segédfüggvényeket.
- **Formázás:** Ügyelj a megfelelő kódformázásra és indentálásra.

## Javaslat a feladat megoldásához

- Hozz létre egy `Book` osztályt, amely tartalmazza a cím, szerző és azonosító adattagokat.
- Készíts egy `Library` osztályt, amely tartalmazza a konstruktort, `addBook`, `deleteBook` és `listBooks` metódusokat.

Miután elkészítetted a programot, folytathatod az egységtesztek írásával a fenti funkciókra. A tesztekkel ellenőrizheted, hogy a kódod helyesen működik-e a várt módon, és hogy a tiszta kód elvei alkalmazva vannak-e a megoldásban.
