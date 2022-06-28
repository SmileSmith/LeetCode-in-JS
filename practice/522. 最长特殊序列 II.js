
/**
 * 最长特殊子序列2
 *
 * @param {*} strs
 */
var findLUSlength_alpha = function findLUSlength(strs) {
    if (!strs || !strs.length) return -1;
    var ans = -1;
    var n = strs.length;
    for (var i = 0; i < n; i++) {
        var  strs[i] = strs[i];
        if ( strs[i].length < ans) continue;

        var isSub = false;
        for (var j = 0; j < n; j++) {
            if (i ==j) continue;
            if (isSubStr_alpha(strs[j], strs[i])) {
                isSub = true;
                break;
            }
        }
        if (!isSub) ans = strs[i].length;
    }
    return ans;
}

/**
 * 检查s2是否是s1的子序列
 *
 * @param {*} s1
 * @param {*} s2
 */
var isSubStr_alpha = function isSubStr(s1,s2) {
    if (s1 == s2) return true;
    var j = 0;
    for (var i = 0; i < s1.length && j < s2.length; i++) {
        if (s1[i] == s2[j]) {
            j++;
        }
    }
    return j == s2.length;
}