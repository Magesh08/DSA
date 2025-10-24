// 🏷️ Problem 21 – Merge Two Sorted Lists
// 📚 Tags:

// Linked List, Recursion, Two Pointers

// 🧩 Problem Description

// You are given the heads of two sorted linked lists: list1 and list2.

// Merge the two lists into one sorted linked list.

// The merged list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// 💡 Intuition

// We have two sorted lists:

// Compare the current node values of both lists.

// Whichever node is smaller, we add it next in the merged list.

// Move the pointer forward in that list.

// Continue until both lists are fully merged.

// You can do this iteratively (using pointers) or recursively.

// ⚙️ Steps (Iterative Approach)

// Create a dummy node to simplify merging logic.

// Use a pointer current that always points to the last node in the merged list.

// Compare list1.val and list2.val.

// If list1.val <= list2.val, link current.next = list1 and move list1 forward.

// Else, link current.next = list2 and move list2 forward.

// Continue until one of the lists becomes null.

// Attach the remaining nodes (if any) from either list.

// Return dummy.next (the start of the merged list).

// 💻 JavaScript Solution
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */

// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  * @tags Linked List, Two Pointers
//  * @description
//  * Merge two sorted linked lists into one sorted list using pointer manipulation.
//  */
// var mergeTwoLists = function(list1, list2) {
//     let dummy = new ListNode(-1);
//     let current = dummy;

//     while (list1 && list2) {
//         if (list1.val <= list2.val) {
//             current.next = list1;
//             list1 = list1.next;
//         } else {
//             current.next = list2;
//             list2 = list2.next;
//         }
//         current = current.next;
//     }

//     // Attach remaining nodes
//     current.next = list1 || list2;

//     return dummy.next;
// };

// 🧠 Example Run

// Input:

// list1 = [1,2,4]
// list2 = [1,3,4]


// Process:

// Step	list1	list2	Added to merged list
// 1	1	1	1 (from list1)
// 2	2	1	1 (from list2)
// 3	2	3	2
// 4	4	3	3
// 5	4	4	4 (from list1)
// 6	null	4	4 (from list2)

// ✅ Output: [1,1,2,3,4,4]

// ⏱️ Complexity Analysis

// Time Complexity: O(n + m) → traverses both lists once

// Space Complexity: O(1) → in-place merging (no extra data structure)

// 🪄 Recursive Version (Cleaner)
// var mergeTwoLists = function(list1, list2) {
//     if (!list1) return list2;
//     if (!list2) return list1;

//     if (list1.val <= list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// };


// ✅ Final Answer:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
