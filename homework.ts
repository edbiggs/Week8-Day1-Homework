// Homework Exercises

// // 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// // A: Number

let b = 'Thieves';
// // A: String

let c = [true, false, false];
// // A: Boolean

let d = {age: number};
// // A: Number

let e = [3]
// // A: Number Array (number[])

let f;
// // A: Any 

let g = []
// // A: Any



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: let song: {title: string, releaseYear?: number} 
// song.title = "Lose Yourself";
// or:  let song: {title: string, releaseYear?: number} ={
//          title: "Lose Yourself"
// }

let prices = [100, 200, 300];
prices[0] = '$100';
// A: Can't assign string value to number array
//      let prices: string[] | number[]
//  Or just use a tuple to assign types to individual values
//      let prices: [string, number, number]

function myFunc(a: number, b: number): number {}
// A: I don't think there are any errors


// Codewars

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if (l == w) {
    return (l * w)
    }
  else{
    return (l*2 + w*2)
  }
  };


//Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation. Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case). Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

  function capitalizeWord(word) {
    return (word[0].toUpperCase() + word.slice(1));
  }