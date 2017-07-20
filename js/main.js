(function () {
    'use strict';

    angular.module('main', ['ui.bootstrap'])
		.controller('AppController', AppController);		
		
	//---------->[INYECCION DEPENDENCIAS]<--------------------------------------
    AppController.$inject = ['$scope', '$uibModal', '$filter'];
	
    //---------->[CONTROLADOR PRINCIPAL]<---------------------------------------
    function AppController($scope, $uibModal, $filter) {
		//------------------------->[DECLARACION VARIABLES]<--------------------
        //Scope
        var vm = this;
		
		//Variables
		vm.inicio = "Hola !!!";
		
		vm.totalItems = 40;
		vm.currentPage = 4;					
		
	}
	//---------->[FIN CONTROLADOR PRINCIPAL]<-----------------------------------
		
})();