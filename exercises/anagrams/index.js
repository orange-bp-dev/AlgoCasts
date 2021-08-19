// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let stringAChars = {}
  let stringBChars = {}

  //stringA, stringBを正規表現にかけて、記号と空白を除外
  formalStringA = stringA.replace(/[^\w]/g, "").toLowerCase()
  formalStringB = stringB.replace(/[^\w]/g, "").toLowerCase()

  if (formalStringA !== formalStringB) return console.log(false, "文字列不一致")

  //stringAとstringBに含まれる文字とその個数のmapを作成
  const createStringMap = (str, map) => {
    //Objectのときは 'o'f
    for (let char of str) {
      if (!map[char]) {
        map[char] = 1
      } else {
        map[char] += 1
      }
    }
  }

  //関数にかける
  createStringMap(formalStringA, stringAChars)
  createStringMap(formalStringB, stringBChars)

  //stringAをループで回して、それぞれの文字について、stringBに含まれる個数と同じかを判定
  for (let aChar in stringAChars) {
    if (stringAChars[aChar] !== stringBChars[aChar]) return console.log(false)
  }

  return console.log(true)
}

anagrams("sato ryoka   !!!!!!", "sato ryoka  ?")

//もう一つの方法はアルファベット順にソートして、それぞれの文字列がおなじになるかどうかを判定する方法

module.exports = anagrams
