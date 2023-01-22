function twoSum(arr, S) {
  let sum = []
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    let sumMinus = S - arr[i];

    if (hashTable[sumMinus] !== undefined) {
      sum.push([arr[i], sumMinus])
    }
    hashTable[arr[i]] = arr[i]
  }
  return sum
}

console.log(twoSum([3, 5, 2, -4, 8, 11], 7))