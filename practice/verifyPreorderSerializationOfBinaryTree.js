/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    if (!preorder) return false;
    const nodes = preorder.split(',');
    if (nodes.length % 2 === 0) return false;
    const tree = buildBinaryTree(nodes.shift(), nodes);
    return !(tree === false || nodes.length > 0);
};

var buildBinaryTree = function(rootValue, nodes) {
    const root = { value: rootValue };
    // 根植是#时，说明已到底层
    if (rootValue === '#') return root;

    const leftValue = nodes.shift();
    const rightValue = nodes.shift();
    // 左枝或右枝为空时，说明不是用#填充的完整的二叉树
    if (!leftValue || !rightValue) return false;

    root.left = leftValue === '#' ? '#' : buildBinaryTree(leftValue, nodes);
    root.right = rightValue === '#' ? '#' : buildBinaryTree(rightValue, nodes);
    return root;
}
