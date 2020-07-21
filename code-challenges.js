// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// function that takes in a certain number of indexes
let fibonacci = (number) =>
{
// if the number inputed is 1 return [1,1]
  if (number === 1) {
    return [1,1]
  } else {
// variable  that includes the fibonacci formula and pushes the answer into solution variable
    let solution = fibonacci(number - 1)
    solution.push(solution[solution.length - 1] + solution[solution.length - 2])
    return solution
  }
}

 console.log(fibonacci(10))

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

let numsOnly = (value) => {
    if(typeof(value)=== 'number' && value % 2 !== 0){
        return value
    }
}
// .filter() here that will create an array with only numbers and then put them in order from least to greatest with .sort()
let oddNumsOnly = (array) => {
    return array.filter(numsOnly).sort(function(a, b){return a-b})
}

console.log(oddNumsOnly(fullArr1))
console.log(oddNumsOnly(fullArr2))

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”
const centerLetter = (string) => {
        let oddCoreLetter = string.length / 2
        let evenCoreLetter = string.length / 2 - 1
         if (string.length % 2 !==0) {
            return string.charAt(oddCoreLetter)
        } else {
            return string.charAt(evenCoreLetter) + string.charAt(oddCoreLetter)

        }
}
console.log(centerLetter(middleLetters1))
console.log(centerLetter(middleLetters2))


// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
class Spheres {
    constructor(){
        this.area = 0
    }
    areaSpheres (radius){
        this.area = 4 * Math.PI * (Math.pow(radius, 2))
        }
    }

    var  sphere1 = new Spheres()
    sphere1.areaSpheres(1)

    var  sphere2 = new Spheres()
    sphere2.areaSpheres(22)

    var  sphere3 = new Spheres()
    sphere3.areaSpheres(112)

    console.log(sphere1)
    console.log(sphere2)
    console.log(sphere3)
    



// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

let addedNumbers = (array)  => { 
    let newArray = []
    array.reduce(function(a,b,i) { return newArray[i] = a+b; },0)
    return newArray
}
    console.log(addedNumbers(numbersToAdd1))