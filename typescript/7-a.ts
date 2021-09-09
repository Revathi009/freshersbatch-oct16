let javascriptarray = [
    {id: 1, name: "abc"},
    {id: 2, name: "def"},
    {id: 3, name: "ghi"},
    {id: 4, name: "jkl"}];

let show = javascriptarray.find(({id}) => id === 3);
console.log(show);


let array = ["Revathi", "Dusa", "Female", "Analyst"];
let[fname, lname, gender, position] = array;
console.log(gender);