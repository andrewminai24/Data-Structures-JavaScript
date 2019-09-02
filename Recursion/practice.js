const arr = [1, 2, 3, 4, 5]
console.log(arr)

for (let i = 0; i < arr.length; i++) {
  console.log(i, 'for loop')
}
console.log(" ")

let i = 0;
while (i < arr.length) {
  console.log(i, 'while loop')
  i++
}

console.log(" ")

const solution = (array, i = 0) => {
  if (i === array.length) return 
  console.log(i, 'recursion')
  return solution(array, i + 1)
}

console.log(solution(arr))
