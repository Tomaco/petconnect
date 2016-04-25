angular.module('gmapsApp', ['uiGmapgoogle-maps'])
  .controller('MapsCtrl', function ($scope) {
    $scope.map = { 
      center: { 
        latitude: -35, 
        longitude: -58 
      },
      zoom: 10
    }
  });
