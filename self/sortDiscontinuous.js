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
/**
 * 左右两个分区排序
 * @param {Array} left 
 * @param {Array} right
 * 
 * @returns {Array} 左右区间排序后的数组
 */
function sort(left, right) {
  const result = [];
  while (left.length > 0 || right.length > 0) {
    if (right[0] === undefined || left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
}

/**
 * 归并排序
 * 
 * 1  需要中间数组，返回新数组
 * 2  二分之一分区
 * 3  先分区，再排序，分和排是先后的
 * 4  两两比较，稳定排序
 * 
 * @param {Array} numberArray 
 * 
 * @returns {Array} 排序后的数组
 */
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

const inputString = '101,333,111,99,98,97,100,444,96,95,94,1,2,0,3,4,6,100,101,3,4';
// eslint-disable-next-line
console.log('input string: \n' + inputString + '\n');
const result = runSort(inputString);
// eslint-disable-next-line
console.log('result: \n' + result);




/**
 * 快速排序
 * 
 * 1  直接在待排序序列中排序
 * 2  分区是随机的
 * 3  分区过程中同时排序
 * 4  交换排序，跳跃性，不稳定排序
 * 
 * @param {Array} array 
 * @param {Number} left 
 * @param {Number} right 
 * 
 * @returns {Array} 排序后的数组
 */
function quickSort(array, left = 0, right = array.length - 1) {
  let partitionIndex;

  if (left < right) {
    partitionIndex = partition(array, left, right);
    // 左区和右区都分别递归进行左右分区
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
/**
 * 以中间值为基准，左右分区，返回中间索引
 * @param {Array} array 
 * @param {Number} left 
 * @param {Number} right 
 * 
 * @returns {Number} 中间Index
 */
function partition(array, left, right) {
  const pivot = left;
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
/**
 * 交换数组中i和j元素的位置
 * @param {Array} array 
 * @param {Number} i 
 * @param {Number} j 
 */
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
