app.filter('getProfilePic', function () {
  return function (str) {
    if (str)
      return JSON.parse(str).profile_image_url;
    else
      return "http://placehold.it/70x70";
  };
});

app.filter('username', function () {
  return function (str) {
    var obj = JSON.parse(str);
    return obj.name;
  };
});

app.filter('timeFromNow', function () {
  return function (str) {
    return moment(Date.parse(str)).fromNow();
  };
});

app.filter('orderObjectBy', function(){
  return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
      array.push(input[objectKey]);
    }

    function compare(a,b) {
      if (a[attribute] < b[attribute])
        return -1;
      if (a[attribute] > b[attribute])
        return 1;
      return 0;
    }

    array.sort(compare);
    return array;
  }
});

app.filter('reverse', function() {
      function toArray(list) {
         var k, out = [];
         if( list ) {
            if( angular.isArray(list) ) {
               out = list;
            }
            else if( typeof(list) === 'object' ) {
               for (k in list) {
                  if (list.hasOwnProperty(k)) { out.push(list[k]); }
               }
            }
         }
         return out;
      }
      return function(items) {
         return toArray(items).slice().reverse();
      };
   });
