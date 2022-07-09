var wiggleSortalpha = function(nums) {
    // 定义1个数组，临时存放从大到小的数据
    var tempArr = quickSort(Array.from(nums));

    var smallIndex = Math.floor((tempArr.length - 1) / 2);
    var bigIndex = tempArr.length - 1;
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            nums[i] = tempArr[smallIndex];
            smallIndex--;
        } else {
            nums[i] = tempArr[bigIndex];
            bigIndex--;
        }
    }
    return nums;
};


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

function partition (array, left, right) {
    var pivot = left + 1;
    for (var i = pivot; i <= right; i++) {
        if (array[i] <  array[left]) {
            swap(array, i, pivot);
            pivot++;
        }
    }
    swap(array, left, pivot - 1);
    return pivot - 1;
}

function swap (array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


/**
 * 桶排序版本，因为最大值限定了5000，这种情况下考虑空间换时间
 *
 * @param {*} nums
 */
function wiggleSort(nums) {
    // 5001个桶（0-5000）
    var bucket = Array.from({ length: 5001 }, function () {
      return 0;
    });
    for (var i = 0; i < nums.length; i++) {
      bucket[nums[i]]++;
    }
    console.log(bucket);
    var k = 5000;
    // 插空放 较大元素
    for (var j = 1; j < nums.length; j += 2) {
      while (!bucket[k]) {
        k--;
      }
      nums[j] = k;
      bucket[k]--;
    }
    //插空放 较小元素
    for (var j = 0; j < nums.length; j += 2) {
      while (!bucket[k]) {
        k--;
      }
      nums[j] = k;
      bucket[k]--;
    }
  }
  