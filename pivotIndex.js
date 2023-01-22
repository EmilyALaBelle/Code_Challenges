// let arr = [1, 7, 3, 6, 5, 6]


function pivotIndex(index) {
  let sum = 0;
  let leftSum = 0;

  index.forEach((element) => sum += element)

  for (i = 0; i < index.length; i++) {
    if (sum - leftSum - index[i] === leftSum){
      return i
    } 
    leftSum += index[i]
  }
  return -1
}

console.log(pivotIndex([2, 1, -1]))