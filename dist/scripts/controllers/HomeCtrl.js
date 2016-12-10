(function() {
    function HomeCtrl (Room, $uibModal, Message) {

        this.rooms = Room.all;
        this.messages = Message.all;
        this.activeRoom = null;

        this.createRoomModal = function() {
          $uibModal.open({
            templateUrl: 'templates/createRoomModal.html',
            controller: 'RoomCtrl',
            size: 'sm'
          });
        };

        this.clickActiveRoom = function(room) {
          this.activeRoom = room;
          this.messages = Message.getByRoomId(room.$id);
        };
      };
 angular
        .module('cha-cha')
        .controller('HomeCtrl', ['Room','$uibModal','Message', HomeCtrl]);
})();
