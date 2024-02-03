/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode();
  let answer = dummy
  let ptr1 = l1;
  let ptr2 = l2;
  let carry = 0;

  while(ptr1 || ptr2){
    let sum = (ptr1 ? ptr1.val : 0) + (ptr2 ? ptr2.val : 0) + carry
    carry = Math.floor(sum / 10)

    answer.next = new ListNode(sum % 10)
    answer = answer.next

    if(ptr1) ptr1 = ptr1.next
    if(ptr2) ptr2 = ptr2.next
  }
  return dummy.next
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(list1, list2))