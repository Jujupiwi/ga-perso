'use strict';

(function () {
  angular.module('ga-arrete', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.arrete', {
      url: '/arretes',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des stocks Arrêté Comptable'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/stock/arrete.comptable/arrete.comptable.html',
          controller : 'ArreteComptableController as arretes'
        }
      }
    });
  });
})();

