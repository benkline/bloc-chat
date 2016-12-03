function() {
    function ModalCtrl ($uibModal, $log, $document) {

        var $ctrl = this;

        $ctrl.items = [
          'item1', 'item2', 'item3'
        ];

        $ctrl.animationsEnabled = true;

        $ctrl.open = function (size, parentSelector) {
          var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
          var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'modal.html',
            controller: 'ModalCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem,
            resolve: {
              items: function () {
                return $ctrl.items;
              }
            }
          });

          modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
        };

          $ctrl.ok = function () {
            $ctrl.close({$value: $ctrl.selected.item});
          };

          $ctrl.cancel = function () {
            $ctrl.dismiss({$value: 'cancel'});
          };
        }
      });

 angular
        .module('cha-cha')
        .controller('ModalCtrl', ['$uibModal', '$log', '$document', ModalCtrl]);
})();
