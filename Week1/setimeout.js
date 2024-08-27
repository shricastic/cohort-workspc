console.log("hi therer")

setTimeout(function(){
  console.log("setTimeout function executed")
}, 5000)

let a = 0;
for(let i=0; i<10000000000; i++) a+=i
console.log(a)
