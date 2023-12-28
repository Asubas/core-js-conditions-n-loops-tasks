// function rotateMatrix(matrix) {
//   const newMat = matrix;
//   for (let i = 0; i < newMat.length / 2; i += 1) {
//     for (let j = i; j < newMat.length - i - 1; j += 1) {
//       const temp = newMat[i][j]; // top left to store

//       newMat[i][j] = newMat[newMat.length - 1 - j][i]; // bottom left to top left

//       newMat[newMat.length - 1 - j][i] =
//         newMat[newMat.length - 1 - i][newMat.length - 1 - j]; // bottom right to bottom left
//       newMat[newMat.length - 1 - i][newMat.length - 1 - j] =
//         newMat[j][newMat.length - 1 - i]; // top right to bottom rightt

//       newMat[j][newMat.length - 1 - i] = temp; // temp to top right
//     }
//   }
//   return matrix;
// }

// console.log(
//   rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
