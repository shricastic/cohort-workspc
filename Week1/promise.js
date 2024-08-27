const fs = require('fs')

function MyReadFile(){
  return new Promise(function(resolve){
    fs.readFile('demo.txt', 'utf-8', function(err, data){
      resolve(data);
    })
  })
}

function onDone(data){
  console.log(data)
}

const p = MyReadFile()
p.then(onDone)
