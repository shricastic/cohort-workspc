const fs = require('fs')

function MyReadFile(readData){
  fs.readFile('demo.txt', 'utf-8', function(err, data){
    readData(data)
  })
}

function readData(data){
  console.log(data)
}

MyReadFile(readData)
