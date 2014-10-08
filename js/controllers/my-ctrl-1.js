define(['./module'], function (controllers) {
    'use strict';

    controllers.controller('MyCtrl1', ['$scope', 'Phone', function($scope,Phone) {
    	$scope.phones = Phone.query();
    }]);
});
