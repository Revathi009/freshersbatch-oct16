var circle = {
    print: function () {
        console.log("circle obj");
    }
};
var employee = {
    print: function () {
        console.log("employee obj");
    }
};
function printAll() {
    var objArr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objArr[_i] = arguments[_i];
    }
    for (var i in objArr) {
        console.log(objArr[i].print());
    }
}
