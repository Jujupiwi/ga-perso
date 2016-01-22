'use strict';

(function () {
  angular.module('ga-madsupport', ['ga-core']).config(function ($stateProvider) {
    $stateProvider.state('main.madsupport', {
      url: '/madsupports',
      data: {
        breadcrumb: ['main.home'],
        title: 'Liste des mises à disposition de support'
      },
      views: {
        'content@layout': {
          templateUrl: 'app/mad/support/mad.support.html',
          controller : 'MadSupportController as madsupports'
        }
      }
    });
  });
})();

