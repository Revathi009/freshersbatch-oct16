

// let message = "Array of names";
// displayNames = (message, 'tom', 'Jerry', 'ivasn');
// let[t,j,e]=names
// let[t, ...elements] = names;
//     console.log(elements);





let displayNames = function(message: any, ...names: any[]){
    console.log("name:" + names);
    console.log("length:" + String.length);
}

let message = "Array of names"
displayNames(message, 'tom', 'Jerry', 'ivasn');


function String_length(String_length: any) {
    throw new Error("Function not implemented.");
}




    // for(let name of names){
//     console.log(name);
// }

