function myAsyncAwaitFunction(){
  return new Promise(function(resolve){
    resolve("Hola Shrikrushna!")
  })
}

async function main(){
  const values = myAsyncAwaitFunction()
  console.log(values)
}

main()
