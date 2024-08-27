function myAsyncFunction(){
  return new Promise(function(resolve){
    resolve("Hi Shrikrushna")
  })
}

function main(){
  myAsyncFunction().then(function(value){
    console.log(value)
  })
}

main()
