
function valid_anagram(word, anagram, store = {}, store1 = {}){
    if (word.length != anagram.length) return false;

    for (let i = 0; i < word.length; i++) {
        !store[word[i]] ? store[word[i]] = 1 : store[word[i]] += 1
        !store1[anagram[i]] ? store1[anagram[i]] = 1 : store1[anagram[i]] += 1    
    }

    for (let i = 0; i < word.length; i++) {
        if (store[word[i]] != store1[word[i]]) {
            return false
        }
    }
    console.log(anagram.length, anagram.size)
    return true
}

console.log(valid_anagram('anagram', 'aaangrm'))