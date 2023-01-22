runningSum = function (nums) {
  
  //loop through nums[i], 0<=i<nums.length-1  
  
  //insert nums[i]+nums[i+1] into temp variable
  
  //insert temp into num[i+1]
  
  for (let i = 0; i < nums.length - 1; i++) {

    let temp = nums[i] + nums[i + 1];

    nums[i + 1] = temp;
  }

  //return updated nums with running sum

  return nums;

};

//TESTS

console.log(runningSum([1, 2, 3, 4]));

//Expected Output: [1,3,6,10]
