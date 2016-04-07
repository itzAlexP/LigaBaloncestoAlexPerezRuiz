/**
 * Created by Javi on 27/01/2016.
 */
'use strict'
angular.module('ligabaloncestoApp')
    .controller('jugadorCtrl', function($scope, $http) {


        $http.get("api/jugadors").then(function (response) {
            $scope.jugadores = response.data;
        });
        $scope.filtrarPor = function(filtro){
            $scope.filtracion = filtro;

        };

        $scope.consultarCanastas = function(){
            var canastas = $scope.num;
            $http.get("api/jugadorsCanastas/"+canastas).then(
                function (response) {
                $scope.jugadores = response.data;
            },function errorCallback(response){
                    console.log(response);
            });
        };
    });

/*angular.module('ligabaloncestoApp')
    .controller('jugadorCtrl', function($scope) {


        $scope.num = metodoRequest
    });

*/
