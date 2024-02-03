/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let intersectionNode = findIntersection(headA, headB);

    if (!intersectionNode) {
        return null;
    }

    let skipA = countNodes(headA, intersectionNode);
    let skipB = countNodes(headB, intersectionNode);

    return intersectionNode;
};

function findIntersection(headA, headB) {
    let currentA = headA;
    let currentB = headB;

    while (currentA !== currentB) {
        currentA = currentA ? currentA.next : headB;
        currentB = currentB ? currentB.next : headA;
    }

    return currentA;
}

function countNodes(head, targetNode) {
    let count = 0;
    let current = head;

    while (current !== targetNode) {
        count++;
        current = current.next;
    }

    return count;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}
function createLinkedList(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

const listAArray = [4, 1, 8, 4, 5];
const listBArray = [5, 6, 1, 8, 4, 5];
const listA = createLinkedList(listAArray);
const listB = createLinkedList(listBArray);
getIntersectionNode(listA, listB)