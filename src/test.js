function rotateMatrix(matrix) {
  const newMat = matrix;
  for (let i = 0; i < newMat.length / 2; i += 1) {
    for (let j = i; j < newMat.length - i - 1; j += 1) {
      const temp = newMat[i][j];
      // двигаю слева направо
      newMat[i][j] = newMat[newMat.length - i - 1][j];

      newMat[newMat.length - i - 1][j] =
        newMat[newMat.length - j - 1][newMat.length - i - 1];

      newMat[newMat.length - j - 1][newMat.length - i - 1] =
        newMat[newMat.length - i - 1][newMat.length - j - 1];

      newMat[newMat.length - i - 1][newMat.length - j - 1] = temp;
    }
  }
  return matrix;
}

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
