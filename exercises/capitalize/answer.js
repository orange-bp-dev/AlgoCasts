//圧倒的効率的例
function capitalize(str) {
  const words = []
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  console.log(words.join(" "))
  return words.join(" ")
}

capitalize("hello world")
