//Answer2

function capitalize(str) {
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  console.log(result)

  return result
}

capitalize("sato ryoka")
