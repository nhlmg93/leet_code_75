function longestConsecutive(nums = []) {
  let memo = new Set(nums);
  let res = 0;
  nums.forEach((num) => {
    if (!memo.has(num - 1)) {
      let currLength = 1;
      let check = num + 1;
      while (memo.has(check)) {
        currLength++;
        check++;
      }
      if (currLength > res) {
        res = currLength;
      }
    }
  });
  return res;
}

console.log(longestConsecutive([1, 2, 3, 4, 100, 87]));
