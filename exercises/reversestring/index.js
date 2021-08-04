// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution 1 ES6の機能を存分に使う書き方（split, reverse, join）
  // var splitString = str.split("")
  // var reverseArray = splitString.reverse()
  // var joinArray = reverseArray.join("")
  // return joinArray

  // Solution 2 reverseやjoinを使わず、forループを使う書き方
  // let reversed = ""
  // for (let character of str) {
  //   console.log(character)
  //   reversed = character + reversed
  // }
  // // console.log(reversed)
  // return reversed

  // Solution 3 Reduceを使う書き方
  //reduceの理解が怪しいので確認
  //reduceの第一引数はfunction第二引数は初期値
  //第一引数のfunctionの第一引数（ややこしい）はreduceの第荷引数でありループする値
  //第二引数はsplitされたstrの各値
  return str.split("").reduce((reversed, character) => {
    //return + 1行 なので { return }を省略可
    return character + reversed
  }, "")
}

console.log(reverse("apple"))

module.exports = reverse
