function productExceptSelf(nums = []) {
  let prefix = 1;
  let res = [];
  nums.forEach((num) => {
    res.push(prefix);
    prefix *= num;
  });

  let postfix = 1;
  nums.reverse().forEach((num, idx) => {
    res[res.length - 1 - idx] *= postfix;
    postfix *= num;
  });
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
