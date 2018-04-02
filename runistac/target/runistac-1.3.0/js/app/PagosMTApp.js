'use strict';


// Declare app level module which depends on filters, and services
var module=angular.module('adminPagosMT', [
  'ngRoute',
  'adminPagosMT.controllers'
]);
module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/PagosMT.html', controller: 'PagosMTCtrl'});
  $routeProvider.otherwise({redirectTo: '/'}); 
}]);
