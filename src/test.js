// function getSpiralMatrix(size) {
//   const arr = [];
//   for (let j = 0; j < size; j += 1) {
//     const subArr = [];
//     for (let i = 0; i < size; i += 1) {
//       subArr[i] = i + 1;
//     }
//     arr[j] = subArr;
//   }
//   let counter = 1;
//   let startCol = 0;
//   let endCol = size - 1;
//   let startRow = 0;
//   let endRow = size - 1;
//   while (startCol <= endCol && startRow <= endRow) {
//     for (let i = startCol; i <= endCol; i += 1) {
//       arr[startRow][i] = counter;
//       counter += 1;
//     }
//     startRow += 1;
//     for (let j = startRow; j <= endRow; j += 1) {
//       arr[j][endCol] = counter;
//       counter += 1;
//     }
//     endCol -= 1;
//     for (let y = endCol; y >= startCol; y -= 1) {
//       arr[endRow][y] = counter;
//       counter += 1;
//     }
//     endRow -= 1;
//     for (let u = endRow; u >= startRow; u -= 1) {
//       arr[u][startCol] = counter;
//       counter += 1;
//     }
//     startCol += 1;
//   }
//   console.log(arr[0]);
//   console.log(arr[1]);
//   console.log(arr[2]);
//   console.log(arr[3]);
//   return arr;
// }
// console.log(getSpiralMatrix(4));
