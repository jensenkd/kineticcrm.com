angular.module('app', []);

function newsletterCtrl($scope, $http, $log) {
    $scope.newsletterEmail = '';
    $scope.message = '';
    $scope.messageLevel = '';

    $scope.signupObject = {
        EmailAddress: ''
    }

    $scope.subscribe = function(email) {
        $log.info('Email Subscriber: ' + email);
        
        $http.post('https://fb51676b198a9fddec0c5dd74dd146316044803e3300dfa8:x@api.createsend.com/api/v3.1/subscribers/699619cc532e356b479ec1627ddd9c81.json', $scope.signupObject)
            .success(function(data, status, headers, config) {
                $scope.message = 'You have been successfully subscribed';
                $scope.messageLevel = 'success';
                $scope.newsletterEmail = '';
            })
            .error(function(data, status, headers, config) {
                $scope.message = 'There has been an error subscribing.  Please validate that your email address is correct.';
                $scope.messageLevel = 'error';
            });
    };
}

function signupCntrl($scope, $http, $log, $window) {
    $scope.user = {};

    $scope.timezones = [
        { id: 1, name: 'England, Ireland, Portugal (GMT+0)', timeFactor: 0 },
        { id: 2, name: 'Europe: France, Spain, Germany, Poland, etc. (GMT+1)', timeFactor: 1 },
        { id: 3, name: 'Central Europe: Turkey, Greece, Finland, etc. (GMT+2)', timeFactor: 2 },
        { id: 4, name: 'Moscow, Saudi Arabia (GMT+3)', timeFactor: 3 },
        { id: 5, name: 'Oman (GMT+4)', timeFactor: 4 },
        { id: 6, name: 'Pakistan (GMT+5)', timeFactor: 5 },
        { id: 7, name: 'India (GMT+6)', timeFactor: 6 },
        { id: 8, name: 'Indonesia (GMT+7)', timeFactor: 7 },
        { id: 9, name: 'China, Phillipines, Malaysia, West Australia (GMT+8)', timeFactor: 8 },
        { id: 10, name: 'Japan (GMT+9)', timeFactor: 9 },
        { id: 11, name: 'East Australia (GMT+10)', timeFactor: 10 },
        { id: 12, name: 'Solomon islands, Micronesia (GMT+11)', timeFactor: 11 },
        { id: 13, name: 'Marshall Islands, Fiji (GMT+12)', timeFactor: 12 },
        { id: 14, name: 'Samoa, Midway (GMT-11)', timeFactor: -11 },
        { id: 15, name: 'Hawaii, French Polynesia, Cook island (GMT-10)', timeFactor: -10 },
        { id: 16, name: 'Alaska (GMT-9)', timeFactor: -9 },
        { id: 17, name: 'US Pacific (GMT-8)', timeFactor: -8 },
        { id: 18, name: 'US Mountain (GMT-7)', timeFactor: -7 },
        { id: 19, name: 'US Central (GMT-6)', timeFactor: -6 },
        { id: 20, name: 'US Eastern (GMT-5)', timeFactor: -5 },
        { id: 21, name: 'New Foundland, Venezuela, Chile (GMT-4)', timeFactor: -4 },
        { id: 22, name: 'Brazil, Argentina, Greenland (GMT-3)', timeFactor: -3 },
        { id: 23, name: 'Mid-Atlantic (GMT-2)', timeFactor: -2 },
        { id: 24, name: 'Azores, Cape Verda Is. (GMT-1)', timeFactor: -1 }
    ];

    $scope.signup = function (user) {

        $http.post('http://api.kineticcrm.com/api/register', user)
            .success(function (data, status, headers, config) {
                $window.location.href = 'https://app.kineticcrm.com/login';
            })
            .error(function (data, status, headers, config) {
                $scope.message = data.message;
            });
    };
};
