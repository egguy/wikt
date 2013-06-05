'use strict';


// Declare app level module which depends on filters, and services
angular.module('wikt', ['ui.state', 'wikt.filters', 'wikt.services', 'wikt.directives', 'wikt.controllers']).
    config(function ($stateProvider, $routeProvider) {
    $stateProvider.state('sample', {
       url: '/sample',
       'views': {
           'sample' : {
               templateUrl: 'views/document/sample.html'
           }
       }
    });
});
