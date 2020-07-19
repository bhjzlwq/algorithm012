/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 前序遍历
var preorderTraversal = (root) => {
  let result = []
  var preOrderTraverseNode = (node) => {
    if (node) {
      result.push(node.val)
      preOrderTraverseNode(node.left)
      preOrderTraverseNode(node.right)
    }
  }
  preOrderTraverseNode(root)
  return result
};
