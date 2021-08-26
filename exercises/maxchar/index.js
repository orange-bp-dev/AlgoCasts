// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let chars = {}
  let max = 0
  let maxChar = ""

  for (let char of sntr) {
    //chars[str] += 1 || 1
    ;["", "", ""]
    if (!chars[char]) {
      chars[char] = 1
    } else {
      chars[char] += 1
    }
  }
  // console.log("charts", chars)

  for (let char in chars) {
    // console.log(char)
    if (chars[char] > max) {
      max = chars[char]
      maxChar = char
    }
  }
  console.log(chars)

  // console.log(max, maxChar)

  return maxChar

  // //objectのvalue値だけを取り出した配列を作成
  // const valueArr = Object.values(chars)
  // const keyArr = Object.keys(chars)

  // const valueKeyMap = []
  // for (let i = 0; i < valueArr.length; i++) {
  //   valueKeyMap.push(valueArr[i],keyArr[i])
  // }

  // //作成した配列内の数字で最大値を取得
  // const maxValue = valueArr.reduce((a, b) => (a > b ? a : b))
  // //取得した最大値をvalueとして持つ要素のkeyを取得して返す
  // const maxValueKey = console.log(chars)
}

console.log(maxChar("aiiueoaaakkkkkkkk")) //この状態だと最大値が同じものが含まれてても一つしか返ってこない。

module.exports = maxChar
