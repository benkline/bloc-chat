(function() {
    function HomeCtrl (Room, $modal) {

        this.heroTitle = "chat!";

        this.rooms = Room.all;

        this.createRoomModal = function() {
          $modal.open({
            templateUrl: 'templates/createRoomModal.html',
            controller: 'RoomCtrl',
            size: 'sm'
          });
        };
      };
 angular
        .module('cha-cha')
        .controller('HomeCtrl', ['Room', '$modal', HomeCtrl]);
})();
