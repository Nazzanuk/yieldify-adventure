(function () {
    app.controller('TerminalCtrl', ['$scope', 'DataService', function ($scope, DataService) {

        $scope.command = "Hello!";

        var execute = function () {
            if ($scope.command == "") return;
            DataService.execute($scope.command);
            $scope.command = "";
            $('.terminal-input').focus();
        };

        var events = function () {
            $('.terminal-input').focus();
        };

        var init = function () {
            events();
        };

        init();

        $scope.getMessages = DataService.getMessages;
        $scope.execute = execute;
    }]);
}());
