'use strict';

(function () {
  angular.module('ga-facturation', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.facturation', {
      url: '/facturations',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des facturations'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/finance/facturation/facturation.html',
          controller : 'FacturationController as facturations'
        }
      }
    });
  });
})();

