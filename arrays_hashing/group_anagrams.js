function group_anagrams(anagrams, count = [], hash = {}){
    for(const word of anagrams){
        count = Array(26).fill(0)
        for(const letter of word){
            // a = 80 -> 0, 80 - 80
            // b = 81 -> 1, 81 - 80
            // ...
            // z = 106 -> 25, 105 - 80
            count[letter.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }
        hash[count] ? hash[count].push(word) : hash[count] = [word]
    }
    return Object.keys(hash).map(key => hash[key]) // returning values hash in a list
}

//O(m * n)

console.log(group_anagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))