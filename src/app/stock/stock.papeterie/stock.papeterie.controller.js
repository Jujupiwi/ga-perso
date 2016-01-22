'use strict';

(function () {
  angular.module('ga-stockpap')
    .controller('StockPapeterieController', function (StockPapeterieService) {
      var vm = this;

      StockPapeterieService.list().then(function stockPapeterieResult(data) {
        vm.stockpapslist = data;
        vm.papeterielist = StockPapeterieService.listPapeteries(data);
      });

      StockPapeterieService.listDepots().then(function stockPapeterieResult(data) {
        vm.depotslist = data;
      });

    })
})();
