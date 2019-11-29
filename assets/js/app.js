var app = angular.module('app', ['ngRoute','ngMeta']);

app.config(['$locationProvider', '$routeProvider','ngMetaProvider', function ($locationProvider, $routeProvider,ngMetaProvider) {




$routeProvider.

when('/home', {
templateUrl: './views/home.html',
 data: {
      meta: {
        'title': 'Booknow - Flights - Hotels - Cars and Tours ',
        'description': 'Book now is the best source for your online travel booking business. we offer last minute travel services such as flights hotels rooms tours and cars rental or transfer '
      }
    }
}).
when('/hotels', {
templateUrl: './themes/default/hotels.html',
 data: {
      meta: {
        'title': 'Booknow - Hotels',
        'description': 'Find last minute and cheap hotels'
      }
    }
}).
when('/contact', {
templateUrl: './views/contact.html',
 data: {
      meta: {
        'title': 'Contact',
        'description': 'Contact us today'
      }
    }
}).
when('/about', {
templateUrl: './views/about.html',
 data: {
      meta: {
        'title': 'Contact',
        'description': 'Contact us today'
      }
    }
}).

otherwise({
redirectTo: '/home'
});

$locationProvider.html5Mode(true);
}])

.run(['ngMeta', function(ngMeta) {
    ngMeta.init();
}])

// .directive('headdrop', function() {
//     return {
//         restrict: 'E',
// templateUrl: './themes/default/partials/headdrop.html',
//     };
// });


app.controller('Home', ['$http','$scope',function ($http,$scope) {

     $http({
     method: 'GET',
     url: 'https://www.phptravels.net/public/expedia/api/expedia/list?appKey=phptravels',
     data: $.param({ }),
     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
     }).then(
     function(res) {

     $scope.items = res.data.HotelListResponse.HotelList.HotelSummary
     console.log('succes !',  res.data.HotelListResponse.HotelList.HotelSummary);
     },
     function(err) {
     console.log('error...', err);
     }
 );

}]);




