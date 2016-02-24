angular.module('starter.services', [])
        .factory('Offers', function ($http, $ionicLoading) {
            
            var offers = [];
            
            return {
                latest: function () {

                    $ionicLoading.show();
                    
                    return $http.get('http://www.prodio.bg/mobile.json').then(
                            function (result) {
                                offers = result.data;
                                $ionicLoading.hide();
                                return result.data;
                            },
                            function (err) {
                                alert(JSON.stringify(err))
                                $ionicLoading.hide();
                                return JSON.stringify(err);
                            }
                    );
                },
                get: function (id) {
                    for (var i = 0; i < offers.length; i++) {
                        if (offers[i].ListingID == parseInt(id)) {
                            return offers[i];
                        }
                    }
                    return null;
                }
            }
        })
        .factory('Chats', function () {
            // Might use a resource here that returns a JSON array

            // Some fake testing data
            var chats = [{
                    id: 0,
                    name: 'Ben Sparrow',
                    lastText: 'You on your way?',
                    face: 'img/ben.png'
                }, {
                    id: 1,
                    name: 'Max Lynx',
                    lastText: 'Hey, it\'s me',
                    face: 'img/max.png'
                }, {
                    id: 2,
                    name: 'Adam Bradleyson',
                    lastText: 'I should buy a boat',
                    face: 'img/adam.jpg'
                }, {
                    id: 3,
                    name: 'Perry Governor',
                    lastText: 'Look at my mukluks!',
                    face: 'img/perry.png'
                }, {
                    id: 4,
                    name: 'Mike Harrington',
                    lastText: 'This is wicked good ice cream.',
                    face: 'img/mike.png'
                }];

            return {
                all: function () {
                    return chats;
                },
                remove: function (chat) {
                    chats.splice(chats.indexOf(chat), 1);
                },
                get: function (chatId) {
                    for (var i = 0; i < chats.length; i++) {
                        if (chats[i].id === parseInt(chatId)) {
                            return chats[i];
                        }
                    }
                    return null;
                }
            };
        });
