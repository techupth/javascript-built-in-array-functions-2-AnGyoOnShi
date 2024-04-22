function isPalindrome(string) {
  // Start coding here
  let check = string.split("");
  check.reverse();
  check = check.join("");
  return string === check;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
