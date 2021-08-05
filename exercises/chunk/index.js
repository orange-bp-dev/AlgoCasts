// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = []

  //Solution 1 ややこしい方法
  // for (let element of array) {
  //   const last = chunked[chunked.length - 1]
  //   console.log("last", last)

  //   if (!last || last.length === size) {
  //     chunked.push([element])
  //   } else {
  //     last.push(element)
  //   }
  // }

  //Solution2 sliceを使う方法（最初に思いついた）
  let index = 0
  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2))

module.exports = chunk
