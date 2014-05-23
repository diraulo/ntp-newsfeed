'use strict';

app.factory('News', function($resource) {
  return $resource('https://torid-fire-4837.firebaseio.com/tweets/todos/:id.json');
});
