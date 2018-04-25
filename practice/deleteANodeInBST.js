/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  // 如果节点是null，返回节点，终止递归
  if (root === null) return root;
  if (root.val > key) {
    // 如果节点值比目标值大，递归处理左树
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    // 如果节点值比目标值小，递归处理右树
    root.right = deleteNode(root.right, key);
  } else {
    // 相等的情况，root.val = key
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      root.val = getMinLeftNodeValue(root.right);
      root.right = deleteNode(root.right, root.val);
    }
  }
  return root;
};

/**
 * 左树中找最小的值
 *
 * @param {any} root
 * @returns
 */
function getMinLeftNodeValue(root) {
  var node = root;
  while (node.left !== null) {
    node = node.left;
  }
  return node.val;
}
