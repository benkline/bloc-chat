(function() {
    function HomeCtrl ($cookies, $uibModal, Room, Message ) {

        this.rooms = Room.all;
        this.messages = Message.all;
        this.activeRoom = null;
        this.user = $cookies.get('name')

        this.createRoomModal = function() {
          $uibModal.open({
            templateUrl: 'templates/createRoomModal.html',
            controller: 'RoomCtrl',
            size: 'sm'
          });
        };

        this.sendNewMessage = function(newMessage) {
          messageObj = {
              "username"  : this.user,
              "content"   : this.newMessage,
              "sentAt"    : Date(),
              "roomId"    : this.activeRoom.$id
          }
          console.log(messageObj);
          Message.send(messageObj);
        };

        this.clickActiveRoom = function(room) {
          this.activeRoom = room;
          this.messages = Message.getByRoomId(room.$id);
        };
      };
 angular
        .module('cha-cha')
        .controller('HomeCtrl', ['$cookies', '$uibModal','Room', 'Message', HomeCtrl]);
})();
