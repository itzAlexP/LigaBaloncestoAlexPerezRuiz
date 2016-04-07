'use strict'
angular.module('ligabaloncestoApp')
    .controller('creacionJugadorCtrl', function($scope, Jugador, Equipo,  entity) {
        $scope.equipos = entity;
        /*$scope.getEquipos = function(){
         Equipo.query({},function(result) {
         $scope.equipos = result;
         });
         };*/
        $scope.jugador;
        $scope.save = function () {
            $scope.isSaving = true;
            Jugador.save($scope.jugador, onSaveSuccess, onSaveError);
        };
        var onSaveSuccess = function (result) {
            $scope.isSaving = false;
        };
        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        //$scope.enviar2 = $scope.enviar2;
       $scope.enviar = function(){

            var id = $scope.idEquipo;
            var canastas = $scope.num;

        $scope.info =  Jugador.idCanastas({id:id, canastas:canastas});



        };
    })
    .factory("Jugador",function($resource){
        return $resource('api/jugadors/:id', {}, {
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    return angular.toJson(data);
                }
            }
        });
    });
