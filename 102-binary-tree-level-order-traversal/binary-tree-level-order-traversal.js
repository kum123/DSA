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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
                if(!root) return [];
                let queue = [root,null], ans = [[]], row =0;

                while(queue.length > 1){
                        
                        let cur = queue.shift();
                        if(cur == null){
                         row++;
                        ans[row] = [];
                        queue.push(null);
                        } else {
                            ans[row].push(cur.val);
                       if(cur.left) queue.push(cur.left) ;
                       if(cur.right) queue.push(cur.right)   
                        }
                    
                       }

            return ans;
};