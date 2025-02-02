/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= a && b >= c) {
    max = b;
  } else if (c >= a && c >= b) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  for (let i = 1; i <= 8; i += 1) {
    if (
      queen.x === king.x ||
      queen.y === king.y ||
      (queen.x + i === king.x && queen.y + i === king.y) ||
      (queen.x - i === king.x && queen.y - i === king.y) ||
      (queen.x - i === king.x && queen.y + i === king.y) ||
      (queen.x + i === king.x && queen.y - i === king.y)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
    if (a === b || a === c || b === c) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  const tens = Math.floor(num / 10);
  if (tens === 1) result += 'X';
  if (tens === 2) result += 'XX';
  if (tens === 3) result += 'XXX';

  if (num % 10 === 1) result += 'I';
  if (num % 10 === 2) result += 'II';
  if (num % 10 === 3) result += 'III';
  if (num % 10 === 4) result += 'IV';
  if (num % 10 === 5) result += 'V';
  if (num % 10 === 6) result += 'VI';
  if (num % 10 === 7) result += 'VII';
  if (num % 10 === 8) result += 'VIII';
  if (num % 10 === 9) result += 'IX';

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let word = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        word = 'zero';
        break;
      case '-':
        word = 'minus';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      case '.':
        word = 'point';
        break;
      case ',':
        word = 'point';
        break;
      default:
        word = 'incorrect argument';
    }
    if (result !== '') {
      result += ` ${word}`;
    } else {
      result += word;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - (1 + i)]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = String(num);
  const strDig = String(digit);
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === strDig) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let left = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    total -= arr[i];
    if (left === total) {
      return i;
    }
    left += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let j = 0; j < size; j += 1) {
    const subArr = [];
    for (let i = 0; i < size; i += 1) {
      subArr[i] = i + 1;
    }
    arr[j] = subArr;
  }
  let counter = 1;
  let startCol = 0;
  let endCol = size - 1;
  let startRow = 0;
  let endRow = size - 1;
  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i += 1) {
      arr[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;
    for (let j = startRow; j <= endRow; j += 1) {
      arr[j][endCol] = counter;
      counter += 1;
    }
    endCol -= 1;
    for (let y = endCol; y >= startCol; y -= 1) {
      arr[endRow][y] = counter;
      counter += 1;
    }
    endRow -= 1;
    for (let u = endRow; u >= startRow; u -= 1) {
      arr[u][startCol] = counter;
      counter += 1;
    }
    startCol += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMat = matrix;
  for (let i = 0; i < newMat.length / 2; i += 1) {
    for (let j = i; j < newMat.length - i - 1; j += 1) {
      const temp = newMat[i][j];
      newMat[i][j] = newMat[newMat.length - 1 - j][i];
      newMat[newMat.length - 1 - j][i] =
        newMat[newMat.length - 1 - i][newMat.length - 1 - j];
      newMat[newMat.length - 1 - i][newMat.length - 1 - j] =
        newMat[j][newMat.length - 1 - i];
      newMat[j][newMat.length - 1 - i] = temp;
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortArr = arr;
  for (let i = 0, l = sortArr.length; i < l; i += 1) {
    const current = sortArr[i];
    let j = i;
    while (j > 0 && sortArr[j - 1] > current) {
      sortArr[j] = sortArr[j - 1];
      j -= 1;
    }
    sortArr[j] = current;
  }
  return sortArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let newStr = str;
  const iterationResult = [str];
  let magicNumber = 0;
  for (let j = 1; j <= iterations; j += 1) {
    let left = '';
    let right = '';
    for (let i = 1; i < newStr.length; i += 2) {
      right += newStr[i];
    }
    for (let i = 2; i < newStr.length; i += 2) {
      left += newStr[i];
    }
    iterationResult[j] = newStr[0] + left + right;
    newStr = iterationResult[j];
    if (iterationResult[j] === str) {
      magicNumber = j;
      break;
    }
  }
  return iterationResult[magicNumber ? iterations % magicNumber : iterations];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let num = number;
  const arr = [];
  while (num > 0) {
    arr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  for (let i = arr.length; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      const index = i - 1;
      let indexSwap;
      for (let j = i; j < arr.length; j += 1) {
        if (arr[j] > arr[index]) {
          if (indexSwap === undefined) {
            indexSwap = j;
          } else if (arr[j] < arr[indexSwap]) {
            indexSwap = j;
          }
        }
      }
      [arr[index], arr[indexSwap]] = [arr[indexSwap], arr[index]];
      const sortRight = arr.splice(i).sort();
      const result = parseInt([...arr, ...sortRight].join(''), 10);
      return result;
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
