(function () {
    app.controller('TerminalCtrl', ['$scope', 'DataService', function ($scope, DataService) {

        $scope.command = "";

        /**
         * If we have an input, execute it,
         * then focus back to the input element and scroll to the bottom of the terminal content
         * the timeouts are for the staggered animations
         */
        var execute = function () {
            if ($scope.command == "") return;
            DataService.execute($scope.command);
            $scope.command = "";

            setTimeout(function () {
                $('.terminal-input').focus();
                $('.terminal-content')[0].scrollTop = $('.terminal-content')[0].scrollHeight;
                $('.terminal-content .input').addClass('active');
            }, 100);

            setTimeout(function () {
                $('.terminal-content .response').addClass('active');
            }, 400);
        };

        var events = function () {
            $('.terminal-input').focus();
        };

        var init = function () {
            events();
        };

        init();

        $scope.getMessages = DataService.getMessages;
        $scope.getStatus = DataService.getStatus;
        $scope.execute = execute;
    }]);
}());
