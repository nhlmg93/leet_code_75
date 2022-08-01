function productExceptSelf(nums = []) {
  let res = [];
  let left = 1;
  let right = 1;
  for(let i=0;i<nums.length;i++){
      res[i] = left;
      left = left*nums[i];
  }
  for(let i=nums.length-1;i>=0;i--){
      res[i] = right*res[i];
      right = right*nums[i];
   }
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));

//for the first pass of the nums array we are 
//inserting into res the left prefix and mult
//the left prefix by current nums value. 
//this essentiall multiplies the all the values 
//in front of the current idx.
//we then we do the same except we multiply what
//we have at the idx of the res with the right prefix while
//looping from end to beginning