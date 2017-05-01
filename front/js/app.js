var app = angular.module("app", []);

app.controller("firstCtr", ["$scope", "$http", function (self, http) {
    self.hello = "Start Test";
    self.helloModel;
    self.result;
    self.message;
    self.messageNumber;
    self.sayHello = function () {
        http({
            method: 'GET',
            url: '../web/index.php/hello/' + self.helloModel
        }).then(function successCallback(response) {
            if (response.data.msg !== "Hello undefined")
                self.hello = response.data.msg;
        });
    };
    self.writeMessage = function () {
        http({
            method: 'POST',
            data: {
                message: self.message
            },
            url: '../web/index.php/message'
        }).then(function successCallback(response) {
            self.result = [response.data.msg];
        }, function errorCallback(response) {
            self.result = ["Error to write message"];
        });
    };
    self.readMessage = function () {
        http({
            method: 'GET',
            url: '../web/index.php/message/' + self.messageNumber
        }).then(function successCallback(response) {
            self.result = response.data.msg;
        }, function errorCallback(response) {
            self.result = ["Error to read messages"];
        });
    };
}]);