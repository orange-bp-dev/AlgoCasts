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
  //俺の回答
  //strの文字数を測定
  //仮にstrの文字数を11としてループを回す。
  //strの最初の文字と最後の文字を比較
  //strの最初から２番めの文字と最後から２番めの文字を比較
  //奇数の場合真ん中の文字は無視
  //すべての回でtrueであればtrueを返す
  //いずれかでfalseの場合はfalseを返す
  for (let i = 0; i < splitedString.length; i++) {
    return splitedString[i] == splitedString[splitedString.length - 1 - i]
  }
}

console.log(palindrome("aaaiiiaaa"))

module.exports = palindrome
