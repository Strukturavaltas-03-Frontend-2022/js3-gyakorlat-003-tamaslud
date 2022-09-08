document.cookie = 'viewed=5; uid=354774631237; ssid=Bx55OWbHJ0Vt_IGIF';

const cookieHandler = {
  allcookiesObject: {},
  getall() {
    const allCookies = document.cookie.split('; ');
    allCookies.forEach((cookie) => {
      const cookieArray = cookie.split('=');
      cookieHandler.allcookiesObject[cookieArray[0]] = cookieArray[1];
    });
  },

  toSessionStorage() {
    const allCookiesObject = cookieHandler.getall();
    allCookiesObject.forEach((key, value) => { sessionStorage.setItem(key, value); });
  },

  flush() {
    const allCookiesObject = cookieHandler.getall();
    allCookiesObject.forEach((key, value) =>
    { document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`; });
  },

};

export {
  cookieHandler,
}

/*
2. Készíts egy `cookieHandler` nevű objectet, az alábbi három metódust megvalósítja:
- `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban,
ahol a sütik neve a key és az értéke a value (pl. { viewed: 5 })
- `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba az adott süti
nevével és értékével
- `flush`: törli az összes sütit

A teszteléshez hozd létre a böngésződben az alábbi sütiket:
- `viewed`: 5
- `uid`: 354774631237
- `ssid`: Bx55OWbHJ0Vt_IGIF
*/
