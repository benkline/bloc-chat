(function() {
    function HomeCtrl($scope, Rooms) {
       this.heroTitle = "share lists and chat!";
    }

    angular
        .module('cha-cha')
        .controller('HomeCtrl', ['$scope', 'Rooms', HomeCtrl]);
})();
