'use strict';

/* Document Controller */

angular.module('wikt.controllers', []).controller('DocumentController');

function DocumentController ($scope, $http) {
    $scope.getSample = function() {
        $http.get('file/README.md').success(function(markdown) {
            $scope.markdown = markdown;
            var converter = new Showdown.converter();
            $scope.html = converter.makeHtml(markdown);
        });
    };

    $scope.getSample();
}