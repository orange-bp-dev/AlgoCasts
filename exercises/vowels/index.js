// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0
  const checker = "aiueo"

  // for (let i in str) {
  //   if (str[i] === "a" || str[i] === "i" || str[i] === "u" || str[i] === "e" || str[i] === "o") {
  //     count++
  //   } else {
  //     count += 0
  //   }
  // }

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++
    }
  }

  return count
}

console.log(vowels("android"))

module.exports = vowels
