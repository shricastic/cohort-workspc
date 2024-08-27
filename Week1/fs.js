const fs = require('fs')

fs.readFile("demo.txt", "utf-8", function(err, data){
  console.log(data); 
} )
