var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

var jerry = new Person('Jerry');
var arnav = new Person('Arnav');
var people = [jerry, arnav];

util.inherits(Person, events.EventEmitter);

people.forEach(function(Person){
    Person.on('speak', function(mssg){
        console.log(Person.name + 'Hello' + 'mssg');
    });
});

jeery.emit('speak','Jerry!');



