let capitalNames = function(...names: Array<string>){
    console.log();
    for (let i in names ){
    console.log(names[i].toUpperCase());
}
}

// message1 = "Upper Case letters"
let namesArray = ["apples", "bananas", "strawberries", "blueberries"];
capitalNames(...namesArray)



// function capitals(...names: Array<string>){
//     console.log();
//     for(let i in names)
//         console.log(names[i].toUpperCase());
// }

// capitals('Tony Stark','Natasha Romanoff','Thor','Steve Rogers','Hulk','Hawk Eye');
// console.log("----------------------------------------------------");
