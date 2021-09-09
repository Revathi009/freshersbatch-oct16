var javascriptarray = [
    { id: 1, name: "abc" },
    { id: 2, name: "def" },
    { id: 3, name: "ghi" },
    { id: 4, name: "jkl" }
];
var show = javascriptarray.find(function (_a) {
    var id = _a.id;
    return id === 3;
});
console.log(show);
var array = ["Revathi", "Dusa", "Female", "Analyst"];
var fname = array[0], lname = array[1], gender = array[2], position = array[3];
console.log(gender);
