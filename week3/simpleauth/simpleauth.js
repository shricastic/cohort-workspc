const express = require('express');
const jwt = require('jsonwebtoken');
const jwt_secret = '12345';

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "shri@gmail.com",
    password: "12345",
    name: "Shri Reddy"
  }, 
  
  {
    username: "shreya@gmail.com",
    password: '123456',
    name: "Shreyas"
  },

  {
    username: "madan@gmail.com",
    password: '123',
    name: "Madan shete"
  },
  
];

function userExists(username, password){
  let userexists = false;
  for(let i = 0 ; i<ALL_USERS.length ; i++){
    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
      userexists = true;
    }
  }
  
  return userexists;
}

app.post("/signin", function(req, res){
  const username = req.body.username;
  const password = req.body.password;

  if(!userExists(username, password)){
    return res.status(403).json({
      msg:"User doesn't exist in out in memory db",
    });
  }
  
  var token = jwt.sign({username: username}, jwt_secret);

  return res.json({token,});
});

app.get("/users", function(req, res){
  const token = req.body.token;
  const decoded = jwt.verify(token, jwt_secret);
  const username = decoded.username;
  

  res.json({
    users: ALL_USERS.filter(function(value){
      if(value.username == username){
        return false;
      } else{
        return true;
      }
    })
  })

});

app.listen(3000, function(){
  console.log("app is running")
})
