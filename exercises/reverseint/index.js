// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // 005 -> 5
  //console.log(005)

  console.log(Math.sign(n)) // 1 or -1
  console.log(parseFloat("123-")) // 123
  return parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n)
}
console.log(reverseInt(100))

module.exports = reverseInt
