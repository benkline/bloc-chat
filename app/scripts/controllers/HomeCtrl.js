(function() {
    function HomeCtrl(RoomsFactory) {
      this.heroTitle = "Chat!";

      //access firebase array and create something ng-repeat can use
      var roomList = function(){
        rooms = []
        for (room in RoomsFactory) {
          roomObj = {"Room ": "I am a number"};
          rooms.push(roomObj);
          }
        console.log(room.name);
        return rooms;
      }

      this.RoomsFactory = RoomsFactory;
      this.rooms = roomList();
    }

 angular
        .module('cha-cha')
        .controller('HomeCtrl', ['RoomsFactory', HomeCtrl]);
})();
