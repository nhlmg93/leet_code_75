
function two_sum(array, target){
    let prevMap = {}

    for (let i = 0; i < array.length; i++) {
        const diff = target - array[i]
        if(prevMap[diff])               
            return [prevMap[diff], i]   
        prevMap[array[i]] = i
    }
}

console.log(two_sum([3,5,2,7], 12))
