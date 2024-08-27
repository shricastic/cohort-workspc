const arr = [1, 2, 3, 4, 5]

function is_even(i){
  return i%2 == 0
}

const res = arr.filter(is_even)

console.log(res)
