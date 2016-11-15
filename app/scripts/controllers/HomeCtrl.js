(function() {
    function HomeCtrl() {
       this.heroTitle = "Turn the Music Up!";
    }

    angular
        .module('do-the-cha-cha')
        .controller('HomeCtrl', HomeCtrl);
})();
