/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    function getLength(listNode){
      let count = 0;
      let iterator = listNode;
      while(!iterator.next){
        count++;
        iterator = iterator.next;
      }
      return count
    }

    let l1 = getLength(list1)
    let l2 = getLength(list2)

    let parent, child = {
      list: null,
      length: 0
    }
    parent.list = l1 >= l2 ? list1 : list2
    parent.length = l1 >= l2 ? l1 : l2
    child.list = l1 >= l2 ? list1 : list2
    child.length = l1 >= l2 ? l1 : l2

    while(child.list.next !== null){
      let childIterator = child.list
      
      while(parent.list.next !== null){
        let parentIterator = parent.list;
        if(childIterator.val >= parentIterator.val &&
          childIterator.val < parentIterator.next.val){
          // 子が親以上 && 次の親のバリューより小さい
          child.list.next = parent.list.next;
          parent.list.next = child.list;
        } else {
          parentIterator = parentIterator.next;
        }
      }
      childIterator = childIterator.next;
    }
    return 
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function preview(list1, list2){
  let answer = new ListNode(0,null)

  let currentNode1 = list1;
  let currentNode2 = list2;

  while (!list1.next && !list2.next) {
    console.log("in while")
    if (list1?.next === null && list2?.next !== null) {
      answer.val = list2.val
      list2 = list2?.next
    } else if (list2?.next === null && list1?.next !== null) {
      answer.val = list1.val
      list1 = list1?.next
    }

    let count = 0;
    if (count === 0) {
      if (list1.val <= list2.val) {
        answer.val = list1.val;
        list1 = list1?.next;
      } else {
        answer.val = list2.val
        list2 = list2?.next;
      }
    } else {
      if (list1.val <= list2.val) {
        answer.val = list1.val;
        list1 = list1?.next;
      } else {
        answer.val = list2.val
        list2 = list2?.next;
      }
    }
    count++;
    answer.next = answer;
    console.log(count)
  }
  return answer;
}

const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// preview(list1, list2);

function tester(list1, list2) {
  let dummy = new ListNode(0, null);
  let res = dummy;
  let currentNode1 = list1;
  let currentNode2 = list2;

  while (currentNode1 && currentNode2) {

    if (currentNode1.val <= currentNode2.val) {
      res.next = new ListNode(currentNode1.val, null);
      currentNode1 = currentNode1.next;
    } else {
      res.next = new ListNode(currentNode2.val, null);
      currentNode2 = currentNode2.next;
    }

    res = res.next;
  }

  if (currentNode1 !== null) {
    res.next = currentNode1;
  }

  if (currentNode2 !== null) {
    res.next = currentNode2;
  }

  return dummy.next;
}

const result = tester(list1, list2);
console.log(result);