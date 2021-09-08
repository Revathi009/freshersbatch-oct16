var adder = function(a,b){
    return `The sum of ${a} and ${b} is ${a+b}`;
};

var multiply = function(a,b){
    return `The multiplication of ${a} and ${b} is ${a*b}`;
};

module.exports.adder = adder;
module.exports.multiply = multiply;