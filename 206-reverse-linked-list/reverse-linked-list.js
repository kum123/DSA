/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
//         let cur = head;
//        let reverse = null;

//        while(cur != null) {
        
//         let temp = cur.next;
//         cur.next = reverse;
//         reverse = cur;
//         cur = temp;
            
// }
//         return reverse;


let cur = head;
let reverse = null;

while(cur != null){
    let temp = cur.next;
    cur.next = reverse;
    reverse = cur;
    cur = temp;

}
return reverse;

















    












};