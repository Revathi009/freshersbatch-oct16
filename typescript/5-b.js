var userfriends = function (username) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    console.log(username);
    console.log(friends);
};
var username = "Revathi Dusa";
userfriends(username, 'meghna', 'shivani', 'vasu');
