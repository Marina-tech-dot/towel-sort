module.exports = function towelSort (matrix) {

  let empty = [];

  if (!matrix) return empty

  let arr = matrix.map((item, index) => (index % 2 != 0) ? item.reverse() : item).flat()

  return arr
}

