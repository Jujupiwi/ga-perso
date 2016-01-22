'use strict';

(function () {
  angular.module('ga-ajustement', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.ajustement', {
      url: '/ajustements',
      data: {
        breadcrumb: ['main.home'],
        title: 'Rechercher un ajustement'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/finance/ajustement/ajustement.html',
          controller : 'AjustementController as ajustements'
        }
      }
    });
  });
})();

