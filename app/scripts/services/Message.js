(function() {
  function Message($firebaseArray) {

    var ref = firebase.database().ref().child('messages');
    var allMessages = $firebaseArray(ref);
    
    return {
        getByRoomId: function(room){
          var messages = allMessages.orderByChild("roomId").equalTo(room)
          return messages;
        },

        send: function(messageObj){
          return messages.$add(messageObj);
        }
    }
}

angular
  .module('cha-cha')
  .factory('Message', ['$firebaseArray', Message]);
})();
