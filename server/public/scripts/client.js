var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/heroes', {
    templateUrl: '/views/templates/heroes.html',
    controller: 'HeroesController',
    controllerAs: 'heroes'
  })
  .when('/superpowers' ,{
    templateUrl: '/views/templates/superpowers.html',
    controller: 'SuperpowersController',
    controllerAs: 'superpowers'
  })

  .otherwise({
    redirectTo: 'heroes'
  });

}]);

app.controller('HeroesController', ["$http", function($http) {
  console.log('heroes controller running');
  var self = this;
  // self.message =
  var self = this;
  self.heroes = [];
  self.newHero = {};

  //Get heroes request made
  getHeroes();
  function getHeroes() {
    $http.get('/heroes')
    .then(function(response) {
      console.log(response.data);
      self.heroes = response.data;
    });
  };
}]);

app.controller('SuperpowersController', ["$http", function($http) {
  console.log('superpowers controller running');
  var self = this;
  // self.message =
}]);
