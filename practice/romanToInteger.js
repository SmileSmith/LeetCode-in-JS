/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (!s) return 0;
    let num = 0;
    const romanMap = {
        IV: 'IIII',
        IX: 'VIIII',
        XL: 'XXXX',
        XC: 'LXXXX',
        CD: 'CCCC',
        CM: 'DCCCC',
    };
    const numMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for (const reg in romanMap) {
        if (s.indexOf(reg) >= 0) s = s.replace(reg, romanMap[reg]);
    }
    for (let i = 0, len = s.length; i < len; i++) {
        num += numMap[s[i]];
    }
    return num;
};


/* 
 * 上面的写法在有限数字还好，不需要太多定义romanMap。
 * 但考虑到扩展，应该这么判断：
 * IX： 对应(I)1，(X)10
 * s[i] < s[i+1]
 * result - (I)1 
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt_update = function(s) {
    if (!s) return 0;
    let num = 0;
    const numMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for (let i = 0, len = s.length; i < len; i++) {
        if (numMap[s[i]] < numMap[s[i+1]]) {
            num -= numMap[s[i]];
        } else {
            num += numMap[s[i]];
        }
    }
    return num;
};