// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//圧倒的非効率例

function capitalize(str) {
  const wordSplitedArr = []
  const joinedWordSplitedArr = []

  //スペースごとに単語を分けて配列に格納
  const splitedValueArr = str.split(" ")

  //分けた単語を更に文字ごとに分割して配列に格納
  for (let i in splitedValueArr) {
    wordSplitedArr.push(splitedValueArr[i].split(""))
  }

  //↑で作成作成した配列の一文字目を大文字に変更して代入
  for (let i in wordSplitedArr) {
    wordSplitedArr[i][0] = wordSplitedArr[i][0].toUpperCase()
  }

  //大文字に変換した分割された文字が入ってる配列の中身をjoinして配列に格納
  for (let i in wordSplitedArr) {
    joinedWordSplitedArr.push(wordSplitedArr[i].join(""))
  }

  //単語ごとにスペースを空けてjoin
  const joinedValue = joinedWordSplitedArr.join(" ")

  console.log(joinedValue)
  return joinedValue
}

capitalize("       hello world hi there")

module.exports = capitalize
