/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var left = 0;
  var result = [];
  var length =  l1.length >= l2.length ? l1.length : l2.length;
  for(var i = 0 ; i < length; i++) {
    var sum = l1[l1.length - result.length -1] + l2[l2.length - result.length -1] + left;
    if (sum >= 10 ) {
      left = (sum - (sum % 10)) / 10;
      result.push(sum % 10);
    } else {
      left = 0;
      result.push(sum);
    }
  }
  return result;    
};