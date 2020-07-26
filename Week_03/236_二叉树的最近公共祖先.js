// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let ans =null;
  recursion(root);
  function recursion(node){
    if(ans){ return; }
    if(node === null){
      return false;
    }
    let left = recursion(node.left) ? 1:0;
    let right = recursion(node.right) ? 1:0;
    let mid = node===p||node===q ?1:0;
    if(left+right+mid>=2){
      ans = node;
    }
    return left+right+mid>0;
  }
  return ans
};
