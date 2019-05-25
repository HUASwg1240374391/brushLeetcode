/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let queue_left = [p]
  let queue_right = [q]
  let left = []
  let right = []
  var dfs = function(nodes) {
    var result = []
    var stack = []
    stack.push(nodes)
    while (stack.length) {
      var item = stack.pop()
      result.push(item.val)
      item.right && stack.push(item.right)
      item.left && stack.push(item.left)
    }
    return result
  }
  left = dfs(p)
  right = dfs(q)
  return left.join() === right.join()
}
