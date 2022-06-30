function top_k_freq_elements(nums, k){
    let count = {}
    let freq= new Array(nums.length).fill([])
    let res = []
    nums.forEach(element => {
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

console.log(top_k_freq_elements([1,1,1,2,2,2,1,1,3,3,3], 2))