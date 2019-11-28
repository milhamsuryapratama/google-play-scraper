var gplay = require('google-play-scraper');

// gplay.app({appId: 'com.mobile.legends'})
//   .then(console.log, console.log);

// gplay.list({
//     category: gplay.category.GAME_ACTION,
//     collection: gplay.collection.TOP_FREE,
//     num: 2
//   })
//   .then(console.log, console.log);
gplay.search({
    term: "mobile legends",
    num: 2
  }).then(console.log, console.log);