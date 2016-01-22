'use strict';

(function () {
  angular.module('ga-marche', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.marche', {
      url: '/marches',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des marchés'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/marche/marche.html',
          controller : 'MarcheController as marches'
        }
      }
    });
  });
})();

