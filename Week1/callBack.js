function Arithmetic(a, b, operation){
  let res = operation(a, b)
  return res;
}

function sum(a, b){
  return a+b
}

function sub(a, b){
  return a-b
}

let a = 1
let b = 23

console.log(Arithmetic(a, b, sum))
