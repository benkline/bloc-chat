(function() {
    function Message($firebaseArray) {

        return {
            getByRoomId: function(room){
                var ref = firebase.database().ref().child('messages').orderByChild("roomId").equalTo(room)
                var messages = $firebaseArray(ref);
                return messages;
            },

            send: function(messageObj){
                console.log(messageObj);
                var database = firebase.database().ref().child('messages')
                var newMessageRef = database.push();
                return newMessageRef.set(messageObj);

            }
        }
    }

angular
  .module('cha-cha')
  .factory('Message', ['$firebaseArray', Message]);
})();
