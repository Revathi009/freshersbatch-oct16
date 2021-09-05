var sum = require('./nodejs/operations/sum');
var multiplication = require('./operations/multiplication');
var subtraction = require('./operations/subtraction');
var division = require('./operations/division');

console.log(sum.sum(3,7));
console.log(multiplication.multiplication(3,7));
console.log(subtraction.subtraction(3,7));
console.log(division.division(3,7));

// var firstOperand = +process.argv[2]
// var secondOperand = +process.argv[3]

// sum (firstOperand, secondOperand);
// mult (firstOperand, secondOperand);