//datatypes in Javascript

//integers or numbers, strings, arrays, objects

//GROK this material

//variables ES5 (just var) ES6 (const + let)



//const is variable that will stay the same
//let is setting a variable with a temporary variable (score let score =0)

//numbers
const x = 2

const y = 4

const multiplied = x * y 

//booleans (late to the party lol)
//true and false
//1    and    0 

const alive = true;

const dead = false;


//strings
const kerstinJoe = "kerstin"



//array (any datatype, but all same datatype)
const pokemon = ["pikachu","9", "bulbasaur", "charzard"]

const scores = []

// console.log(scores[0])

///== === =

// =        Setting a value to something

//below totally different because they are checks
// == loosy goosy
// === YOU CAN"T SIT WITH USSSSSS


// == looser equals (1 = "1")
// ===  STRICT equal (down to data type)
// = Assignment operator (not used for conditionals, used for ASSIGNING)


// comparison Operators 

// && both have to be true
// || one has to be true


//INDEXES IN ARRAYS

//arrray indexes ALL begin at 0

//access anything within an array using [BRACKET NOTATION]
// console.log(scores[1]+scores[3])

//concatenation combining 

// console.log(kerstinJoe + " is Data")

const user1 = {
    username: "Blob",
    password: "catsAreMyLife13!",
    passcode: 4400
}

const user2 = {
    username: "Bleeb",
    password: "catsAreMyLife14!",
    passcode: 7777
}
const user3 = {
    username: "Blonk",
    password: "catsAreMyLife15!",
    passcode: 6666
}


const users = [user1, user2, user3]

//get any individual piece of info from an object with DOT NOTATION

// console.log(users[1].passcode)




//putting the FUN in functions

//conditionals (NOT MATH)


//if it's sunny- i'll wear sunscreen. If it's rainy- I'll bring my umbrella.
//otherwise - I'll wear my PJs <----

//


// if sunshine true status = "ill"

function checkStatus(sunshine){
    let status = ""

    if (sunshine === true){
        status = "I'll wear sunscreen"
    }
    else if (sunshine === false){
        status = "I'll bring an umbrella"
    }
    else {
        status = "I'll wear my PJss"
    }
    console.log("this is the status " + status)
}

checkStatus(true)






// checkStatus(false)

// checkStatus("gloomy")























