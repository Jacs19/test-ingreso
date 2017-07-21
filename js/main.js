(function () {
    'use strict';

    angular.module('main', ['ui.bootstrap'])
		.controller('AppController', AppController)
		.filter('paginar', Paginar)
		.filter('capitalizar', Capitalizar);
		
	//---------->[INYECCION DEPENDENCIAS]<--------------------------------------
    AppController.$inject = ['$scope', '$uibModal', '$filter'];
	
    //---------->[CONTROLADOR PRINCIPAL]<---------------------------------------
    function AppController($scope, $uibModal, $filter) {
		//------------------------->[DECLARACION VARIABLES]<--------------------
        //Scope
        var vm = this;
		
		//Variables									
		vm.lista = 
		[
			{
				id			: "1",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},
			{
				id			: "2",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},
			{
				id			: "3",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},
			{
				id			: "4",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},
			{
				id			: "5",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},{
				id			: "6",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},
			{
				id			: "7",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},{
				id			: "8",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},
			{
				id			: "9",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},
			{
				id			: "10",
				nombre		: "jhona",
				fechaInicio	: "20/07/2017",
				fechaFin	: "22/07/2017",
				estado		: "pendiente",
				monto		: "2300"
			},
			{
				id			: "11",
				nombre		: "mario",
				fechaInicio	: "21/07/2017",
				fechaFin	: "23/07/2017",
				estado		: "procesada",
				monto		: "10000"
			},
			{
				id			: "12",
				nombre		: "mario",
				fechaInicio	: "21/07/2017",
				fechaFin	: "23/07/2017",
				estado		: "procesada",
				monto		: "10000"
			},
			{
				id			: "13",
				nombre		: "mario",
				fechaInicio	: "21/07/2017",
				fechaFin	: "23/07/2017",
				estado		: "procesada",
				monto		: "10000"
			},
			{
				id			: "14",
				nombre		: "mario",
				fechaInicio	: "21/07/2017",
				fechaFin	: "23/07/2017",
				estado		: "procesada",
				monto		: "10000"
			},
			{
				id			: "15",
				nombre		: "mario",
				fechaInicio	: "21/07/2017",
				fechaFin	: "23/07/2017",
				estado		: "procesada",
				monto		: "10000"
			},
			{
				id			: "16",
				nombre		: "mario",
				fechaInicio	: "21/07/2017",
				fechaFin	: "23/07/2017",
				estado		: "procesada",
				monto		: "10000"
			},
			{
				id			: "17",
				nombre		: "mario",
				fechaInicio	: "21/07/2017",
				fechaFin	: "23/07/2017",
				estado		: "procesada",
				monto		: "10000"
			},
			{
				id			: "18",
				nombre		: "mario",
				fechaInicio	: "21/07/2017",
				fechaFin	: "23/07/2017",
				estado		: "procesada",
				monto		: "10000"
			}		
		];
		
		vm.listaEstados = ["seleccione...", "aprobado", "pendiente", "rechazado"];		
		
		vm.totalItems 		= vm.lista.length;
		vm.pageSize 		= 5;
		vm.currentPage 		= 1;	
		//vm.arrAux 			= vm.lista.slice(((vm.currentPage * vm.pageSize) - vm.pageSize), (vm.currentPage * vm.pageSize));
		vm.estadoSelected 	= "seleccione...";
		vm.search;
		vm.fechaIniSelected;
		vm.fechaFinSelected;
		
		//Functions		
		vm.filtrar = filtrar;
		//------------------------->[FIN DECLARACION VARIABLES]<--------------------
		
		//------------------------->[FUNCTIONS]<--------------------				
		function filtrar(){
			if(vm.search !== undefined){
				return vm.search;
			}
			if(vm.estadoSelected !== "seleccione..."){
				return vm.estadoSelected;
			}
		}
		
	}
	//---------->[FIN CONTROLADOR PRINCIPAL]<-----------------------------------
	
	//---------->[FILTERS]<-----------------------------------
	function Paginar() {
        return function (lista, currentPage, pageSize) {
			var arr = [];
            if(lista.length > 0){
				arr = lista.slice(((currentPage * pageSize) - pageSize), (currentPage * pageSize));
			}
            return arr;
        };
    }	
	
	function Capitalizar() {
        return function (texto) {
            if (texto === undefined)
                return '';

            var palabras = texto.toLowerCase().split(' ');

            if (palabras.length > 0) {
                for (var i = 0; i < palabras.length; i++) {
                    palabras[i] = palabras[i].trim().charAt(0).toUpperCase() + palabras[i].substr(1);
                }
            }
            return palabras.join(' ');
        };
    }
	//---------->[FIN FILTERS]<-----------------------------------
		
})();