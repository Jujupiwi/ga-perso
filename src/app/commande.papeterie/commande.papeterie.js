'use strict';

(function () {
  angular.module('ga-cmdpapeterie', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.cmdpapeterie', {
      url: '/cmdpapeterie',
      data: {
        breadcrumb: ['main.home'],
        title: 'Commande papeterie'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/commande.papeterie/commande.papeterie.html'
        }
      }
    });
  });
})();

