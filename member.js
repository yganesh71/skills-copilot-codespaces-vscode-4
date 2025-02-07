function skillsMember()() {
    return {
        restrict: 'E',
        templateUrl: 'partials/skills-member.html',
        scope: {
            member: '='
        },
        controller: function ($scope, $http, $window) {
            $scope.member = {};
            $http.get('/api/members/' + $window.localStorage.getItem('memberId')).then(function (res) {
                $scope.member = res.data;
            });
        }
    };
}