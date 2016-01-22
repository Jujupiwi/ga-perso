'use strict';

(function () {
  angular.module('ga-livpapeterie', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.livpapeterie', {
      url: '/livpapeteries',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des livraisons de papeterie'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/livraison/papeterie/livraison.papeterie.html',
          controller : 'LivPapeterieController as livpapeteries'
        }
      }
    });
  });
})();

