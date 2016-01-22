'use strict';

(function () {
  angular.module('ga-param', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.param', {
      url: '/parametres',
      data: {
        breadcrumb: ['main.home'],
        title: 'Paramétrages'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/administration/parametrage/parametrage.html',
          controller : 'ParamController as param'
        }
      }
    });
  });
})();

