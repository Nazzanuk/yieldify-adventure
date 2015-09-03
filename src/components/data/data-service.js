(function () {
    app.service('DataService', [function () {
        var that = this;

        var status = {
            points : 0,
            location : "Unknown room",
            position : "Sitting down",
            facing : "North"
        };
        var messages = [];
        var smartMessages = {};
        var responses = [
            "I don't quite understand this command.",
            "Command not found.",
            "Try something else.",
            "I'm not Siri.",
            "I'm just not smart enough to understand this yet."
        ];

        /**
         * each action matches certain phrases and will then print one of the random responses
         * smartMessages run functions which return the message content
         * @type {*[]}
         */
        var actions = [
            {
                match: ["hello", "hello!", "hi", "hey"],
                response: ["Howdy."]
            },
            {
                match: ["look at room", "where am i"],
                response: [
                    "You are in a plain all white room. 4 walls about 2 meters each, the floor is a grey marble with a single light illuminating the room. There is a white door with a handle in front of you.",
                    "You see 4 white walls and a door directly in front of you"
                ]
            },
            {
                match: ["look at me", "who am i"],
                response: [
                    "You are a smart, intelligent being. You give off a strong glowing positive radiance. You love JavaScript more than your own parents.",
                    "You are statistically likely to be a guy aged between 25 - 29 with around 4 years of dev experience. You are a JavaScript guru who prefers tabs to spaces and loves a dark themed IDE."
                ]
            },
            {
                partial: ["say"],
                smartMessage: "say"
            },
            {
                partial: ["stand up"],
                smartMessage: "standUp"
            },
            {
                partial: ["sit down"],
                smartMessage: "sitDown"
            }
        ];

        /**
         * The smartMessages do more than simply print text, they can modify the state if necessary
         * @param command
         * @returns {string}
         */
        smartMessages.say = function (command) {
            return "You say '" + command.replace('say ','') + "'... nobody responds.";
        };

        smartMessages.standUp = function (command) {
            status.position = "Standing up";
            return "You stand up.";
        };

        smartMessages.sitDown = function (command) {
            status.position = "Sitting down";
            return "You sit down.";
        };

        /**
         * Accepts a command and prints both the input and the response to the screen
         * @param command
         */
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

        var getStatus = function () {
            return status;
        };

        /**
         * Tries to find a response for every command, otherwise returns one of the default messages
         * @param command
         */
        var getResponse = function (command) {
            var response = _.sample(responses);

            for (var i in actions) {
                var action = actions[i];

                for (var j in action.match) {
                    if (command.toLowerCase() == action.match[j].toLowerCase()) {
                        response = _.sample(action.response);
                    }
                }

                for (var j in action.partial) {
                    if (command.toLowerCase().indexOf(action.partial[j].toLowerCase()) > -1) {
                        if (action.response != undefined) {
                            response = action.response;
                        } else {
                            response = smartMessages[action.smartMessage](command);
                        }

                    }
                }

            }

            return response;
        };

        var getMessages = function () {
            return messages;
        };

        var init = function () {};

        init();

        //Only expose specific functions

        that.execute = execute;
        that.getMessages = getMessages;
        that.getStatus = getStatus;
    }]);
}());
