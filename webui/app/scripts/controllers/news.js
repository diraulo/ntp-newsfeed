'use strict';

app.controller('NewsController', function($scope) {
    $scope.news = [{
        'title': 'My awesome title',
        'body': "I really don't have much to say to you hey"
    }, {
        'title': 'My awesome title1',
        'body': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, sequi, libero voluptatum quo sunt repellendus adipisci aspernatur quae accusantium neque maxime quia dignissimos? Blanditiis, cum, quis sequi perferendis dolores quae?"
    }];
});
