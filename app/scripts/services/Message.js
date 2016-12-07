(function() {
  function Message($firebaseArray) {

    Message = {}

    Message.getByRoomId = function(room){
      console.log(room);
      var ref = firebase.database().ref().child('messages').orderByChild("roomId").equalTo(room)
      var messages = $firebaseArray(ref);
      return messages;
      // this.username = ['sorry'];
      // this.content = ['there are no messages in this room yet'];
    };


    return Message;
  };

angular
  .module('cha-cha')
  .factory('Message', ['$firebaseArray', Message]);
})();
