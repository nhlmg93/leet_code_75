function encode(words){
    return words.map(word => String(word.length) + '#' + word).join('');
}
function decode(str) {
    let words = []
    let idx = 0
    while (idx < str.length) {
        let j = idx
        while (str[j] !== "#") {
            j += 1
        }
        let length = parseInt(str.slice(idx,j))
        words.push(str.slice(j + 1, j + 1 + length))
        idx = j + 1 + length
    }
    return words
}

const encodedString = encode(["Apple", "Tree"])
console.log(encodedString)
console.log(decode(encodedString))

//encode scheme: [Apple, Tree] --> 5#Apple4#Tree
//decode: while idx is not the length of the array...
//let j = idx and if the char at j is the # then 
//the num to the left is the end of the slice and
//j is the beginning. parse slice into array.