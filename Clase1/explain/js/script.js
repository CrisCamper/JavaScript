//todo: EXAMPLE 1

console.warn("This is tehe first example. ")

// !Principal variable
a = 10;

// !Print a
console.log(typeof a);

// !Declarations of variables and his sum
b = 20;
a = "Hola";
rta = a+b;

// !Print rta and show his type
console.log(rta);
console.log(typeof rta);

//todo: EXAMPLE 2

console.warn("This is the second example.")

// !DECLARATION OF A VARIABLE WITH THE RESERVED WORD FUNCTION
function example() {
    if (true) {
        var x = 10;
        console.log(x)
    };

    console.log(x)
}

example()

// !ERROR: Because the people nowdays don't use var. Just let and const
console.log(x)

//todo: EXAMPLE 3

console.warn("This is the third example.")

// !VARIABLES

// *INT
let number = 42;
// *FLOAT
let float = 3.1416;
// *STRING
let string = "I'm a string";
// *LISTS
let numbers = [1,2,3,4,5];
let colors = ["Yellow","Blue","Red"];
// *DICTS/OBJECTS
let info = {
    name: "Cris",
    age: 16,
    city: "Colombia"
};
// *ANONIM FUNCTION
let sumar = function(a,b) {
    Ans = a + b;
};
// *NULL VALUE
let null_value = null;
// *UNDEFINED VALUE
let undefined_value = undefined;
// *SYMBOL
let mySymbol = Symbol("My Symbol")
