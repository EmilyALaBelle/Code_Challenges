
//Inefficent

function twoSum(arr, S) {
  let sum = [];
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[i] + arr[j] === S){
        sum.push([arr[i], arr[j]])
      }
    }
  }
  return sum
}
console.log(twoSum([3, 5, 2, -4, 8, 11], 7))