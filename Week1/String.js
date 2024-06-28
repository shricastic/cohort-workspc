let str = "Shrikrushna Gundre"

// length
function getLength(str){
  console.log("Original String: ", str)
  console.log("length of String:", str.length)
}

getLength(str);

// indexOf 
function findIndexOf(str, target){
  console.log("Original String", str)
  console.log("Index of " + target + ": " + str.indexOf(target))
}

let target = "Gundre"
findIndexOf(str, target)

//lastIndexOf
str = "hello world world world"
target = "world"
console.log(str.lastIndexOf(target))

//slice()
str = "Shrikrushna Gundre"
console.log(str.slice(0,11))

//substring(
console.log(str.substring(0,4))

//replace 
console.log(str.replace("Shri", "Hare"))

//split
let arr = str.slice(str, " ")
console.log(arr[0])

//trim
str = " Hello World "
console.log(str.trim())

//toUpperCase 
str = "hello"
console.log(str.toUpperCase())

//toLowerCase
str = "HELLO"
console.log(str.toLowerCase())

//















