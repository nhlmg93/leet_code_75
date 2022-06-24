function longestConsecutive(nums = []) {
  let memo = new Set(nums);
  let res = 0;
  nums.forEach((num) => {
    if (!memo.has(num - 1)) {
      let currLength = 1;
      while (memo.has(num + currLength)) {
        currLength++;
      }
      res = Math.max(currLength, res)
    }
  });
  return res;
}

console.log(longestConsecutive([1, 2, 3, 4, 100, 87]));

//add all items to a set. Check if the current num - 1 is in set
//this checks if we are at the start of a seq on a number line.
//if there isnt then we are at the start of a squence so start counting.
//save off result to compare with current seq length