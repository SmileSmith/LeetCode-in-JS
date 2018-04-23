/**
 * 计算所有质数的总数
 * 
 * 定义质数数组pArr
 * 
 * 1. 从2到n遍历i
 * 2. 如果i能被2整除，则不是质数。遍历pArr。
 */


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes_alpha = function(n) {
    if (n <= 2) return 0;
    const primesArr = [2];
    for (var i = 3; i < n; i++) {
        var isPrime = true;
        for (var j = 0; j < primesArr.length - 1; j++) {
            if (i % primesArr[j] === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            primesArr.push(i);
        }
    }
    return primesArr.length;
};



/**
 * 抽离isPrime函数
 * 
 * 假设的场景如下（后两个是不必须的）
 * 2 × 6 = 12
 * 3 × 4 = 12
 * 4 × 3 = 12
 * 6 × 2 = 12
 * 
 * 1. 从2到n遍历i
 * 2. 如果有n = p * q, 因为p <= q, 所以 p <= 根号n，所以遍历到 i * i < num 即可
 * 
 */


/**
 * @param {number} n 
 * @returns {boolean}
 */
function isPrime_beta(n) {
    for (var i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes_beta = function(n) {
    if (n <= 2) return 0;
    var count = 0;
    for (var i = 3; i <= n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
};


/**
 * 结合alpha中的质数Array，和beta中根号2
 * 
 * 
 * 1. 从2到n遍历i
 * 2. 如果有n = p * q, 因为p <= q, 所以 p <= 根号n，所以遍历到 i * i < num 即可
 * 3. 先判断i是否在质数数组中，再进行取余运算
 * 
 */
