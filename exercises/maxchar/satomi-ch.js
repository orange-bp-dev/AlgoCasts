const points = [
  { userId: 1, point: 76 },
  { userId: 2, point: 94 },
  { userId: 1, point: 61 },
  { userId: 3, point: 76 },
  { userId: 1, point: 55 },
  { userId: 2, point: 39 }
]

// 期待する関数のoutput
// [
//   { userId: 1, point: 192 },
//   { userId: 2, point: 133 },
//   { userId: 3, point: 76 },
// ]

function sum(n) {
  let userPointMap = {}
  let newArr = []

  for (let point of n) {
    if (!userPointMap[point.userId]) {
      userPointMap[point.userId] = point.point
    } else {
      userPointMap[point.userId] += point.point
    }
    // if(userPointMap[])
  }

  for (let upm in userPointMap) {
    newArr.push({ userId: parseInt(upm), point: userPointMap[upm] })
  }

  for (let point of points) {
    // console.log(point)
  }

  return newArr
}

console.log(sum(points))

module.exports = sum
