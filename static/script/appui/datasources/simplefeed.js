

define(
  "sampleapp/appui/datasources/simplefeed",
  [
    "antie/class"
  ],
  function(Class) {
    return Class.extend({
      // You will probably want to do something more useful then returning static data
      loadData : function(callbacks) {
        callbacks.onSuccess(
          [
            {
              "id":"1",
              "title":"21",
              "img" : "static/img/movies/21.jpg"
            },
            {
              "id":"2",
              "title":"Karnan",
              "img" : "static/img/movies/dhanush.jpg"
            },
            {
              "id":"3",
              "title":"Mavericks",
              "img" : "static/img/movies/maverick.jpg"
            },
            {
              "id":"4",
              "title":"Vakeel Saab",
              "img" : "static/img/movies/pavankalyan.jpg"
            },
            {
              "id":"5",
              "title":"Rounders",
              "img" : "static/img/movies/Rounders.jpg"
            },
            {
              "id":"6",
              "title":"Karnan",
              "img" : "static/img/movies/dhanush.jpg"
            },
            {
              "id":"7",
              "title":"21",
              "img" : "static/img/fruit/21.jpg"
            }
          ]
        );
        // callbacks.onError(
        //   {
        //     "img":"static/img/fruit/21.jpg"
        //   }
        // )
      }
    });
  });
