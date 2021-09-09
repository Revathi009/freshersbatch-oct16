var capitalNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log();
    for (var i in names) {
        console.log(names[i].toUpperCase());
    }
};
// message1 = "Upper Case letters"
var namesArray = ["apples", "bananas", "strawberries", "blueberries"];
capitalNames.apply(void 0, namesArray);
// function capitals(...names: Array<string>){
//     console.log();
//     for(let i in names)
//         console.log(names[i].toUpperCase());
// }
// capitals('Tony Stark','Natasha Romanoff','Thor','Steve Rogers','Hulk','Hawk Eye');
// console.log("----------------------------------------------------");
