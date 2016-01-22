'use strict';

(function () {
  angular.module('ga-marchecarte', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.marchecarte', {
      url: '/marchecarte',
      data: {
        breadcrumb: ['main.home'],
        title: 'Export des marchés cartes'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/rapport/marche.carte/marche.carte.html',
          controller : 'MarcheCarteController as marchecarte'
        }
      }
    });
  });
})();

