(function () {
    app.service('DataService', [function () {
        var that = this;

        var status = "Home";
        var messages = [];
        var commands = [];

        var actions = [
            {
                match: ["hello", "hello!", "hi", "hey"],
                response: "Howdy."
            },
            {
                match: ["look at room"],
                response: "This is a very nice room"
            }
        ];

        var execute = function (command) {
            messages.push({
                type: "input",
                message: "> " + command
            });

            messages.push({
                type: "response",
                message: getResponse(command)
            });
        };

        var getResponse = function (command) {
            var response = "I don't quite understand.";

            for (var i in actions) {
                var action = actions[i];

                for (var j in action.match) {
                    if (command.toLowerCase() == action.match[j].toLowerCase()) {
                        response = action.response;
                    }
                }

            }

            return response;
        };

        var getMessages = function () {
            return messages;
        };

        var events = function () {
        };

        var init = function () {
            events();
        };

        init();

        that.execute = execute;
        that.getMessages = getMessages;
    }]);
}());
