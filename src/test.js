function isContainNumber(num, digit) {
  const str = String(num);
  const strDig = String(digit);
  console.log(str);
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === strDig) {
      return true;
    }
  }
  return false;
}

console.log(isContainNumber(123450, 5));
