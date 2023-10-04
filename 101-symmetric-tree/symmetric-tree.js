/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
            return checkIsSymetric(root.left,root.right);

        function checkIsSymetric(a,b){
                if(a == null && b == null) return true;
                if(a == null || b == null) return false;
                if(a.val != b.val ) return false;
                return checkIsSymetric(a.left,b.right) && checkIsSymetric(b.left,a.right)
        }
};