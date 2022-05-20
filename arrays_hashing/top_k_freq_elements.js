function top_k_req_elements(nums, k, count = {}, freq=[], res =[]){
    nums.forEach(element => {
        freq.push([])
        count[element] ? count[element] += 1 : count[element] = 1
    });
    
    for(const [key, value] of Object.entries(count)){
        freq[value].push(key)
    }
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