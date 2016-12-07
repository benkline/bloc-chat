(function() {
    function HomeCtrl (Room, $modal, Message) {

        this.rooms = Room.all;
        this.messages = Message.all
        this.activeRoomTitle = 'chat!';

        

        this.createRoomModal = function() {
          $modal.open({
            templateUrl: 'templates/createRoomModal.html',
            controller: 'RoomCtrl',
            size: 'sm'
          });
        };

        this.clickActiveRoom = function(room) {
          this.activeRoomTitle = room.name;
          this.messages = Message.getByRoomId(room.$id);
        };
      };
 angular
        .module('cha-cha')
        .controller('HomeCtrl', ['Room','$modal','Message', HomeCtrl]);
})();
