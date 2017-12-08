
function selectionSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let result = [];
  let continus = [];
  let nowNumber;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    if (continus.length >= 2 && (array[i] - continus[continus.length - 1] !== 1)) {
      result.push(continus[0], continus[continus.length - 1], array[i]);
      continus = [];
    } else {
      continus.push(array[i]);
    }
  }

  if (continus.length >= 2) {
    result.push(continus[0], continus[continus.length - 1]);
  }
  if (continus.length === 1) {
    result.push(continus[0]);
  }
  return result;
}

function runSort(string) {
  let numberArray = string.split(',');
  if (numberArray.length <= 1) {
    return numberArray;
  }
  numberArray = numberArray.map(numberString => parseInt(numberString, 10));
  return selectionSort(numberArray);
}

const inputString = '1,4,10,9,3,5,6,110,2,90,8,7,109,108,107';
// eslint-disable-next-line
console.log('input string: \n' + inputString + '\n');
const result = runSort(inputString);
// eslint-disable-next-line
console.log('result: \n' + result);
