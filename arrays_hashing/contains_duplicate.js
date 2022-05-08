function contains_duplicate(nums, hashset) {
    for(let i = 0; i < nums.length; i++){
        if(hashset.has(nums[i]))
            return true
        else
          hashset.add(nums[i])  
    }
    return false
}

console.log(contains_duplicate([2,3,4,9,10,3,8,1], new Set()))
console.log(contains_duplicate([1,2,3,4], new Set()))