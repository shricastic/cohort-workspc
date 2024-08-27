function myAsyncFunction(callback){
  callback("Hello Shrikrushna!")
}

async function main(){
  myAsyncFunction(function(value){
    console.log(value)
  })
}

main()
