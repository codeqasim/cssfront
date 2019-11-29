var app = angular.module('app', ['ngRoute','ngMeta']);

app.config(['$locationProvider', '$routeProvider','ngMetaProvider', function ($locationProvider, $routeProvider,ngMetaProvider) {

$routeProvider.

when('/home', {
templateUrl: './views/home.html',
 data: {
      meta: {
        'title': 'CSSFront Inspired by Google Material ',
        'description': 'The only frontend framework you ever need to design your beautifull web apps'
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
        'title': 'About',
        'description': 'Contact us today'
      }
    }
}).

when('/controls', {
templateUrl: './views/form/controls.html',
 data: {
      meta: {
        'title': 'Controls',
        'description': ''
      }
    }
}).

when('/layout-grid', {
templateUrl: './views/layout/grid.html',
 data: {
      meta: {
        'title': 'Layout Grid',
        'description': ''
      }
    }
}).

when('/layout-cards', {
templateUrl: './views/layout/cards.html',
 data: {
      meta: {
        'title': 'Layout Cards',
        'description': ''
      }
    }
}).

when('/layout-tabs', {
templateUrl: './views/layout/tabs.html',
 data: {
      meta: {
        'title': 'Layout Tabs',
        'description': ''
      }
    }
}).

when('/layout-accordion', {
templateUrl: './views/layout/accordion.html',
 data: {
      meta: {
        'title': 'Layout Accordion',
        'description': ''
      }
    }
}).

when('/indicators-progress', {
templateUrl: './views/indicators/progress.html',
 data: {
      meta: {
        'title': 'Indicators Progress',
        'description': ''
      }
    }
}).

when('/indicators-loader', {
templateUrl: './views/indicators/loader.html',
 data: {
      meta: {
        'title': 'Indicators Loader',
        'description': ''
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

.directive('headdrop', function() {
    return {
        restrict: 'E',
templateUrl: './views/headdrop.html',
    };
});


app.controller('Home', ['$http','$scope',function ($http,$scope) {

 //     $http({
 //     method: 'GET',
 //     url: 'https://www.phptravels.net/public/expedia/api/expedia/list?appKey=phptravels',
 //     data: $.param({ }),
 //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
 //     }).then(
 //     function(res) {

 //     $scope.items = res.data.HotelListResponse.HotelList.HotelSummary
 //     console.log('succes !',  res.data.HotelListResponse.HotelList.HotelSummary);
 //     },
 //     function(err) {
 //     console.log('error...', err);
 //     }
 // );

}]);