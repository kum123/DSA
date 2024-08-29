/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
//         let dummy = new ListNode(0);
//         let first = dummy;
//         let second = dummy;

//         for(let i=0; i <= n;i++){
//             first = first ? first.next : null;
//         }
//         console.log(first ? first.val : '');
//         while(first != null){
//             first = first.next;
//             second = second.next;
//         }
//          console.log(second.val);
//         second.next = second.next ?  second.next.next : ;

//    return dummy.next;
 let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};