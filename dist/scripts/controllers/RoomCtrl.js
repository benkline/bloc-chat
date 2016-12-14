(function() {
    function RoomCtrl ($scope, $uibModalInstance, Room) {

    $scope.newRoom = {};

    $scope.createNewRoom = function(){
      if(!$scope.newRoom.name || $scope.newRoom.name !== ''){
        var newRoom = {
          name: $scope.newRoomName
        };

        Room.create(newRoom).then(function(){
          $scope.newRoom.name = '';
          $uibModalInstance.close();
        });

      } else {
        alert("Room name is undefined");
      }
    };

    $scope.cancel = function(){
      $uibModalInstance.close('cancel');
    };

}
angular
        .module('cha-cha')
        .controller('RoomCtrl', ['$scope', '$uibModalInstance', 'Room', RoomCtrl]);
})();
