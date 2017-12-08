function disContinuous(array) {
  let result = [];
  let continus = []
  while (array.length > 0) {
    const nowNumber = array.shift();
    if (continus.length >= 2 && (nowNumber - continus[continus.length - 1] !== 1)) {
      result.push(continus[0], continus[continus.length - 1], nowNumber);
      continus = [];
    } else {
      continus.push(nowNumber);
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

const inputString = '1,4,10,9,3,5,6,110,2,90,8,7,109,108,107';
// eslint-disable-next-line
console.log('input string: \n' + inputString + '\n');
const result = runSort(inputString);
// eslint-disable-next-line
console.log('result: \n' + result);





function quickSort(array, left = 0, right = array.length - 1) {
  let partitionIndex;

  if (left < right) {
    partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, left, right) { //分区操作
  const pivot = left; //设定基准值（pivot）
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (array[i] < array[pivot]) {
      swap(array, i, index);
      index++;
    }
  }
  swap(array, pivot, index - 1);
  return index - 1;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function runQuickSort(string) {
  let numberArray = string.split(',');
  if (numberArray.length <= 1) {
    return numberArray;
  }
  numberArray = numberArray.map(numberString => parseInt(numberString, 10));
  numberArray = quickSort(numberArray);
  return disContinuous(numberArray);
}

const quickSortResult = runQuickSort(inputString);
// eslint-disable-next-line
console.log('quick result: \n' + quickSortResult);
