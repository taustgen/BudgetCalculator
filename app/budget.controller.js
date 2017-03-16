(function() {
    'use strict';

    angular
        .module('app')
        .controller('BudgetController', BudgetController);

    BudgetController.$inject = [];

    /* @ngInject */
    function BudgetController() {
        var vm = this;
        vm.income=[];
        vm.expenses=[];
        vm.inTotal=0.00;
        vm.expTotal=0.00;
        vm.balance=0.00;

        vm.addIncome= function addIncome(){
          if(vm.inSource && vm.inAmount){
            vm.inAmount= Math.round(vm.inAmount*100)/100;
            vm.inTotal+=vm.inAmount;
            vm.inTotal= Math.round(vm.inTotal*100)/100;
            vm.balance+=vm.inAmount;
            vm.balance= Math.round(vm.balance*100)/100;
            vm.income.push({source: vm.inSource, amount: vm.inAmount})
            vm.inAmount=null;
            vm.inSource=null;
          }
        }
        vm.addExpense= function addExpense(){
          if(vm.expSource && vm.expAmount){
            vm.expAmount= Math.round(vm.expAmount*100)/100;
            vm.expTotal+=vm.expAmount;
            vm.expTotal= Math.round(vm.expTotal*100)/100;
            vm.balance-=vm.expAmount;
            vm.balance= Math.round(vm.balance*100)/100;
            vm.expenses.push({source: vm.expSource, amount: vm.expAmount})
            vm.expAmount=null;
            vm.expSource=null;
          }
        }

    }
})();
