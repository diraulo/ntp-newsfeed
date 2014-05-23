'use strict';

app.factory('News',
    function($firebase, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL + 'tweets/todos');
        var news = $firebase(ref);

        var News = {
            all: news,
            create: function (nws) {
              return news_posts.$add(nws);
            },
            find: function (newsId) {
              return news_posts.$child(nwsId);
            },
            delete: function (newsId) {
              return news_posts.$remove(nwsId);
            }
        };

        return News;
    });
