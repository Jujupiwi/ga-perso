'use strict';

(function () {
  angular.module('ga-cmdpapeterie', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.cmdpapeterie', {
      url: '/cmdpapeteries',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des commandes de papeterie'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/commande/papeterie/commande.papeterie.html',
          controller : 'CmdPapeterieController as cmdpapeteries'
        }
      }
    });
  });
})();

