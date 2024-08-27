const arr = [1, 2, 3, 4, 5]

function double(a, idx){
  arr[idx] *= 2;
}

arr.map(double)

console.log(arr)
