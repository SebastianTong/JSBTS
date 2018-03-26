///////////////////////////////////////
// Lecture: Hoisting

// Functions

calculateAge(1994);

function calculateAge(year) {
    console.log(2018 - year);
}

// retirement(1994);  this wont work because hoisting is only for function declarations and not expressions.

var retirement = function(year){
    console.log(65 - (2018 - year));
}

//Variables

console.log(age); // Js knows there is a variable declaration but doesnt know the value yet because it reads line by line.
var age = 24; //if we delete this line, then there is no declaration and js will return an error.

function foo() {
    var age = 33;
    console.log(age);
}

foo(); // this returned the variable age 33 because its inside the variable object of the function context box.
console.log(age); // this returned age 24 because its declared in the variable object of the global context box.
