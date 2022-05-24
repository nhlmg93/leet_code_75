function valid_palindrom(palindrome) {
  let p1 = 0;
  let p2 = palindrome.length - 1;
  while (p1 < p2) {
    let a = palindrome.charAt(p1).toLowerCase();
    while (
      (a.charCodeAt(0) < "0".charCodeAt(0) ||
        a.charCodeAt(0) > "9".charCodeAt(0)) &&
      (a.charCodeAt(0) < "a".charCodeAt(0) ||
        a.charCodeAt(0) > "z".charCodeAt(0) ||
        a.charAt(0) === " ")
    ) {
      p1++;
      a = palindrome.charAt(p1).toLowerCase();
    }
    let b = palindrome.charAt(p2).toLowerCase();
    while (
      ((b.charCodeAt(0) < "0".charCodeAt(0) ||
        b.charCodeAt(0) > "9".charCodeAt(0)) &&
        b.charCodeAt(0) < "a".charCodeAt(0)) ||
      b.charCodeAt(0) > "z".charCodeAt(0) ||
      b.charAt(0) === " "
    ) {
      p2--;
      b = palindrome.charAt(p2).toLowerCase();
    }
    if (
      palindrome.charAt(p1).toLowerCase() !==
      palindrome.charAt(p2).toLowerCase()
    ) {
      return false;
    } else {
      p1++;
      p2--;
    }
  }

  return true;
}

console.log(valid_palindrom("0P"));
module.exports = valid_palindrom;
