// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const splitedString = str.split("")

  //俺の解答
  //strの文字数を測定
  //仮にstrの文字数を11としてループを回す。
  //strの最初の文字と最後の文字を比較
  //strの最初から２番めの文字と最後から２番めの文字を比較
  //奇数の場合真ん中の文字は無視
  //すべての回でtrueであればtrueを返す
  //いずれかでfalseの場合はfalseを返す
  // for (let i = 0; i < splitedString.length; i++) {
  //   return splitedString[i] == splitedString[splitedString.length - 1 - i]
  // }

  //Sotution2 everyを使った方法
  return splitedString.every((char, idx) => {
    return char === str[str.length - idx - 1]
  })

  //Solution1 文字ひっくり返して元の変数と一致するか判定
  // const reversed = str.split("").reverse().join("")
  // return str === reversed
}

console.log(palindrome("aiai"))

module.exports = palindrome
