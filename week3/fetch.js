async function fetchperson(){
  const response = await fetch('https://fakerapi.it/api/v1/persons')
  return response
} 

fetchperson().then(function(data){
  console.log(data)
});

