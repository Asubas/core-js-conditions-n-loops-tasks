function rotateMatrix(matrix) {
  const arr = matrix;
  let startCol = 0;
  let endCol = matrix.length - 1;
  let startRow = 0;
  let endRow = matrix.length - 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i += 1) {
      arr[startRow][i] = arr[endRow][i];
    }
    startRow += 1;
    for (let j = startRow; j <= endRow; j += 1) {
      arr[j][endCol] = arr[j][startCol];
    }
    endCol -= 1;
    for (let y = endCol; y >= startCol; y -= 1) {
      arr[endRow][y] = arr[startCol][y];
    }
    endRow -= 1;
    for (let u = endRow; u >= startRow; u -= 1) {
      arr[u][startCol] = arr[u][endCol];
    }
    startCol += 1;
  }
  return arr;
}

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
