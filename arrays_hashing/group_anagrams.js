function group_anagrams(anagrams){
    let count = []
    let hash = {}
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
    return Object.keys(hash).map(key => hash[key]) // returning hash values in a list
}

//O(m * n)

console.log(group_anagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
//         A  B  C  D  E     T
//count = [1][ ][ ][ ][1]...[1]
//hash = key:count, value:[eat]
//we store idx alphabetical representation of the word in the count array 
//this count array then becomes the key to the bucket for the word to be input too
//or the creation of said bucket
//this is important because we know anagrams have the same letters