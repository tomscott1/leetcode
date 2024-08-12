/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let res = 0;

  const magic = (r, c) => {
      
      // Ensure distinct #1-9
      let values = new Set();
      for (i = 0; i < 3; i++) {
          for (j = 0; j < 3; j++) {
              if (grid[r+i][j+c] < 1 || grid[r+i][j+c] > 9 || values.has(grid[r+i][j+c])) return 0
              values.add(grid[r+i][j+c])
          }
      }

      // rows
      for (x = 0; x < 3; x++) {
          if (grid[r+x][c] + grid[r+x][c+1] + grid[r+x][c+2] !== 15) return 0
      }

      // cols
      for (y = 0; y < 3; y++) {
          if (grid[r][c+y] + grid[r+1][c+y] + grid[r+2][c+y] !== 15) return 0
      }

      // diagonals
      if (grid[r][c] + grid[r+1][c+1] + grid[r+2][c+2] !== 15) return 0
      if (grid[r+2][c] + grid[r+1][c+1] + grid[r][c+2] !== 15) return 0
      
      // if it made it this far it's magic
      return 1

  }

  for (r = 0; r < rows - 2; r++) {
      for (c = 0; c < cols - 2; c++) {
          res += magic(r, c);
      }
  }
  return res;

};