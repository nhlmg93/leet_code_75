function top_k_req_elements(nums, k, count = {}){
    let freq = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        freq[i] = [] 
    }
    

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        count[element] ? count[element] += 1 : count[element] = 1    
    }
    
    for(const [key, value] of Object.entries(count)){
        console.log(key,value)
        freq[value].push(key)
        console.log(freq)
    }

    console.log(freq)
    let res = []
    for (let i = freq.length - 1; i > 0; i--) {
        for (const n of freq[i]){
            res.push(n)
            if (res.length === k) {
                return res
            }
        }
    }
}

console.log(top_k_req_elements([1,1,1,2,2,2,1,1], 1))