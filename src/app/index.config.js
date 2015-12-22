(function() {
  'use strict';

  angular
    .module('ga')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, stConfig) {
    // Enable log
    $logProvider.debugEnabled(true);
    stConfig.pagination.template = 'app/components/layout/table/sort/pagination.tpl.html';
    stConfig.pagination.displayedPages = 10;
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
