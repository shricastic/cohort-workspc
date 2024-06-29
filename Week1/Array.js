let arr = [1, 2, 3]
console.log("Original Array", arr)
//push()
arr.push(4);
console.log("array after pushing 4: ", arr)

//pop()
let tmp = arr.pop()
console.log("array after popping: ", arr)

//shift() pops from front 
arr.shift()
console.log("array after shift operation: ", arr);

//unshift() adds element to front
arr.unshift(5)
console.log("array after unshift", arr)

//concat() joins two arrays
let arr1 = [ 8, 9, 10]
tmp = arr.concat(arr1)
console.log(tmp)

//forEach() takes custom function as input 
arr.forEach(function(item, index){
  console.log(item, index);
})

//map() performs custom operation and returns new array
tmp = arr.map(function(item){
  return item*2
})
console.log("After map: ", tmp)

//filter() filters and returns array
tmp = arr.filter( function(item){
  return item<5
})
console.log("After filtering: ", tmp)

//find() returns the first element found 
tmp = arr.find(function(item){
  return item>1
})
console.log("Find Function", tmp)

//sort() 
arr.sort(function(a, b){
  return a-b
})
console.log("After Sort: ", arr)
