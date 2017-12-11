/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var result = '';
    var length = s.length;
    var isParity = s.length % 2 !== 0;
    var isPalindrome = function isPalindrome(i, j) {
        console.log('--- ' + i + ' +++ ' + j + ' ---\n');
        if (s[i] === s[j]) {
            if(j - i === 2) return true;
            return isPalindrome((i + 2), (j - 2));
        } else {
            return false;
        }
    }
    
    for (var i = 0; i < length; i++) {
        var j = isParity ? length - i - 1: length - i - 2;
        isParity = !isParity;
        if (isPalindrome(i, j)) {
            if (result.length < j - i + 1) {
                result = s.substring(i, j + 1);
            }
        } 
    }
    return result;
};

console.log(longestPalindrome('babad'));