/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */

// took too long

var spiralMatrixIII = function(rows, cols, rStart, cStart) {
  const outputLength = rows * cols;
  const dirs = ['East','South', 'West', 'North'];
  let currentDirection = dirs[0]
  let output = []
  let x = cStart
  let y = rStart
  let spiralCounter = 1
  let directionCounter = 0
  output.push([x, y])
  while (output.length <= outputLength) {
      if (currentDirection == dirs[0]) {
          // East
          x++
          directionCounter++;
          if (spiralCounter == directionCounter) {
              currentDirection = dirs[1]
              directionCounter = 0
          }
          if (0 >= x && x < cols && 0 >= y && y < rows) {
              output.push([x, y])
          }
      }
      if (currentDirection == dirs[1]) {
          y++
          directionCounter++
          if (spiralCounter == directionCounter) {
              currentDirection = dirs[2]
              directionCounter = 0
              spiralCounter++
          }
          if (0 >= x && x < cols && 0 >= y && y < rows) {
              output.push([x, y])
          }
      }
      if (currentDirection == dirs[2]) {
          x--
          directionCounter++
          if (spiralCounter == directionCounter) {
              currentDirection = dirs[3]
              directionCounter = 0
          }
          if (0 >= x && x < cols && 0 >= y && y < rows) {
              output.push([x, y])
          }
      }
      if (currentDirection == dirs[3]) {
          y++
          directionCounter++
          if (spiralCounter == directionCounter) {
              currentDirection = dirs[0]
              directionCounter = 0
              spiralCounter++
          }
          if (0 >= x && x < cols && 0 >= y && y < rows) {
              output.push([x, y])
          }
      }
  }
  return output
};