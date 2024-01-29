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
var addTwoNumbers = function (l1, l2) {
  let l1Sum = 0;
  let l2Sum = 0;

  for (i = 0; i < l1.length; i++) {
    l1Sum += l1[i] * (10 ** i);
  }
  for (i = 0; i < l2.length; i++) {
    l2Sum += l2[i] * (10 ** i);
  }

  let sum = l1Sum + l2Sum;
  const answer = sum
    .toLocaleString()
    .split("")
    .reverse()
    .map((element) => {
      return Number(element);
    });

  console.log(answer)
};

addTwoNumbers([0], [0]);
