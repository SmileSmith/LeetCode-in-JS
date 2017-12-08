
function disContinuous(array) {
  let result = [];
  let continus = []
  while (array.length > 0) {
    let temp = array.shift();
    let lastIndex =  continus.length - 1;
    if (lastIndex > 0 && (temp - continus[lastIndex] !== 1)) {
      result.push(continus[0], continus[lastIndex]);
      continus = [];
    }
    continus.push(temp);
  }
  return result.concat(continus);
}

function sort(left, right) {
  const result = [];
  while (left.length > 0 || right.length > 0) {
    if (!right[0] || left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
}

function mergeSort(numberArray) {
  if (numberArray.length <= 1) {
    return numberArray;
  }
  const mid = Math.floor(numberArray.length / 2);
  const leftArray = numberArray.slice(0, mid);
  const rightArray = numberArray.slice(mid);
  return sort(mergeSort(leftArray), mergeSort(rightArray));
}

function runSort(string) {
  let numberArray = string.split(',');
  if (numberArray.length <= 1) {
    return numberArray;
  }
  numberArray = numberArray.map(numberString => parseInt(numberString, 10));
  numberArray = mergeSort(numberArray);
  return disContinuous(numberArray);
}

const inputString = '1,4,10,9,3,5,6,110,2,90,8,7';
// eslint-disable-next-line
console.log('input string: \n' + inputString + '\n');
const result = runSort(inputString);
// eslint-disable-next-line
console.log('result: \n' + result);
