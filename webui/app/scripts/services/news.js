'use strict';

app.factory('News',
    function($firebase, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL + 'tweets/todos');
        var news = $firebase(ref);

        var News = {
            all: news,
            create: function (news) {
              return news_posts.$add(news);
            },
            find: function (newsId) {
              return news_posts.$child(newsId);
            },
            delete: function (newsId) {
              return news_posts.$remove(newsId);
            }
        };

        return News;
    });
