'use strict';

angular.module('core').controller('HomeCtrl', ['$scope', 'Authentication',
                                  //constructor functions
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        $scope.list=[];
        //should chop cmd into list to analyze properly
        $scope.submitCmd = function() {
            switch(this.cmd) {
                //pass these to a service instead
                case 'google civil':
                    window.open('https://www.google.com/search?sclient=psy-ab&site=&source=hp&btnG=Search&q=civi#q=civil', '_blank');
                    break;
                case 'reddit iama':
                    window.open('https://www.reddit.com/r/iama', '_blank');
                    break;
                case 'gmail':
                    window.open('https://www.gmail.com', '_blank');
                    break;
                case 'fb':
                    window.open('https://www.facebook.com', '_blank');
                    break;
                case 'ph':
                    window.open('https://www.pornhub.com', '_blank');
                    break;
                default:
                    alert('else');
                    break;
            }
        };
	}
]);



