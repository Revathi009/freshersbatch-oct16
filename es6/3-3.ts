interface Printable{
    print():any;
}

let circle: Printable = {
    print(){
        console.log("circle obj");
    }
}
let employee: Printable = {
    print(){
        console.log("employee obj");
    }
}

function printAll(...objArr: Array<any>){
    for(let i in objArr){
        console.log(objArr[i].print())
    }
}
printAll();