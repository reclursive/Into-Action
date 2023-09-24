//Loops 
//repeat

//iteration - loop and action

// arrays, data type container box


// const albums = ["aeroplane over the sea", "henge", "room on fire", "Ys", "Moulin Rouge"]
// const newAlbums = []

// const popped = albums.pop()

// const sliced = albums.slice(1,3)


// console.log(sliced)

// console.log(albums)

// newAlbums.push(popped, popped2)


//built in Javascript functions

//splice, slice, (also string methods)

//pop array method
//push array method 


//starting point 

//ending point

//direction ++ --



//for loop

const numArray = [0,1,2,3,4,5,6,7]
const empty = []

for (let i = 0; i < numArray.length ; i++) {
  empty.push(numArray[i])
  if (numArray[i] % 2 === 0) {
    numArray[i] = "even"
  }
  else {
    numArray[i] = "not even"
  }

 }


  console.log(empty)
  console.log(numArray)
let i = 0;
let text = ""

  while (i < 10) {
    text += "The number is " + i + " ";
    i++;
  }
  console.log(text)





// 
//infinite loops avoid at all cost, ALWAYS SET YOUR ENDING POINT
 //while loops 
//while a condition is true or the case that the loop will continue 





