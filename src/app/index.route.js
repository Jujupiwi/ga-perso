(function() {
  'use strict';

  angular
    .module('ga')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, RestangularProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as main'
      });

    $urlRouterProvider.otherwise('/');
    RestangularProvider.setBaseUrl('/');
  }

})();
