'use strict';

angular.module('core').controller('HomeCtrl', ['$scope', 'Authentication',
                                  //constructor functions
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        $scope.list=[];
        //prototype is reserved
        $scope.ptype = "";
        //should chop cmd into list to analyze properly

        var cmds;

        $scope.showPrototype = function() {
            //prep
            
            //check for undefined 
            if (this.cmd == undefined) return;

            var full_cmd = this.cmd.toLowerCase();

            //pass into suggestion engine
            cmds = full_cmd.split(' ');

            //reddit
            if (cmds[0].startsWith('r')) {
                $scope.ptype =      "REDDIT:r [subreddit]\n" +
                                    "REDDIT:r [top]\n" +
                                    "REDDIT:r [new]\n";
            }

            //google
            if (cmds[0].startsWith('g')) {
                $scope.ptype =      "GOOGLE:g [search query]" + 
                                    "GOOGLE IMAGES:gi [search image]" +
                                    "GOOGLE MAIL:gmail" +
                                    "GOOGLE MAPS:gmaps";
            }

            //man page?
            //and so on
        }


        //singleton 
        /*
        var myClass = function appConstructor(url,) {
            this.open = function() {
                window.open('')
            }
        }
        */

        //web app constructor
        function webApp (baseUrl){
            this.baseUrl = baseUrl;        
            this.open = function() {
                window.open(this.baseUrl, '_blank');
            }
        }

        var reddit = new webApp('http://www.reddit.com');
        reddit.subreddit = function(sub) {
            window.open(this.baseUrl + '/r' + sub, '_blank');
        }

        var google = new webApp('http://www.google.com');
        google.query = function(query) {
            window.open(this.baseUrl + '/search?q=' + query, '_blank');
        }

        google.images = function(query) {
            window.open(this.baseUrl + '/search?q=' + query + '&tbm=isch', '_blank');   
        }

        google.videos = function(query) {
            window.open(this.baseUrl + '/search?q=' + query + '&tbm=vid', '_blank');
        }

        //process cmd here for heuristic
        $scope.submitCmd = function() {
            switch(cmds[0]) {
                //pass these to a service instead
                case 'g':
                    google.open();
                    break;
                case 'gq':
                    google.query('hello');
                    break;
                case 'gi':
                    google.images('hello');
                    break;
                case 'gv':
                    google.videos('hello');
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



