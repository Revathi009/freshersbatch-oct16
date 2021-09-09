var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});
Promise.all([p1, p2])
    .then(function (results) {
    var total = results.reduce(function (p) { return p; });
    console.log("Results: " + results);
    console.log("Total: " + total);
});
