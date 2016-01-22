'use strict';

(function () {
  angular.module('ga-madpapeterie', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.madpapeterie', {
      url: '/madpapeteries',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des mises à disposition de papeterie'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/mad/papeterie/mad.papeterie.html',
          controller : 'MadPapeterieController as madpapeteries'
        }
      }
    });
  });
})();

