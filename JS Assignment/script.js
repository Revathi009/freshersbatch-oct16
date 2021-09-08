// program for even and odd functions
function isCheck()
{
    var num = document.getElementById('oddeven').value;
    if((num % 2) === 0){
        document.getElementById('showmsg').innerHTML="Number" + num + "is even";

    }
    else{
        document.getElementById('showmsg').innerHTML="Number" + num + "is odd";
    }

}
// program to add natural numbers
function total(){
    var add = document.getElementById('sum').value;
    var sum = 0;
    for(var i = 0; i<=add; i++){
        sum = sum + i;
        document.getElementById('showsum').innerHTML="Sum is" + sum + ":";
    }
}

// leap year program
var yearsPrinted = 0;
var currentYear = 2017; //maybe these variables should be declared inside the function

function leapYears() {
    while (yearsPrinted < 30) { //instead of "30", you can have a var howManyLeapYears for how many leap years we want printed
        if ((currentYear % 4 === 0) && (!((currentYear % 100===0) && (currentYear % 400 !== 0)))) {
            //can we simplify the line above?
            document.write(currentYear + "<br>");
            yearsPrinted++;
            currentYear++;
        } else {
            currentYear++;
        }
    }       
}
leapYears();

// // array of string rectangle program
// function rectangle(){
//     var flip = document.getElementById('string').array;
//     var myUser = flip.split(" ");

//     for(var i=0; i< myUser.length; i++){
//             document.getElementById('showstring').innerHTML=("*",myUser[i],"*<br>");
//         }

// }





// function printFrame(arr) {
//     function fill (str, length, char) {
//         return (str.length < length) ? fill(str + char, length, char) : str;
//     }

//     let size = arr.map((str) => {
//             return str.length;
// })
// .reduce((a, b) => {
//         return Math.max(a, b);
// });

//     let line = fill('', size + 4, '*');

//     arr = arr.map((element) => {
//             return '* '+ fill(element, size, ' ') + ' *';
// })
//     arr.unshift(line);
//     arr.push(line);

//     return arr.join('\n');;
// }

// console.log(printFrame(["Hello", "World", "in", "a", "frame"]));

// Program of currency values
function currency(){
    var dollar = document.getElementById('money').value;
    var rupee = dollar*74.20;
    var euro = dollar*0.85;
    var yen = dollar*109.841;
        document.getElementById('showrupee').innerHTML="Rupee" + rupee + ":";
        document.getElementById('showeuro').innerHTML="Euro" + euro + ":";
        document.getElementById('showmoney').innerHTML="Yen" + yen + ":";
    }


