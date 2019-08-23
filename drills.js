const LinkedList = require('./linked-list.js')

function main() {
  const items = [
    'Apollo',
    'Boomer',
    'Helo',
    'Husker',
    'Starbuck',
  ]
  let SLL = new LinkedList
  for (let i = 0; i < items.length; i++) {
    SLL.insertLast(items[i])
  }
  return SLL
}

function display(linkedList) {
  console.log(linkedList);
};

function size(linkedList) {
  let size = 0;
  let currNode = linkedList.head;
  if (currNode === null) {
    return size;
  }
  size = size + 1;
  while (currNode.next !== null) {
    size = size + 1;
    currNode = currNode.next;
  }
  return size;
};

function isEmpty(linkedList) {
  if (linkedList.head === null) {
    return true;
  }
  return false;
};

function findLast(linkedList) {
  let lastNode = linkedList.head;
  while (lastNode.next !== null) {
    lastNode = lastNode.next;
  }
  return lastNode;
};

function reverseList(linkedList) {
  // Do not make new list
  // Keep track of the following:
  // current node
  // previous node, if exists,
  // next node, if exists
  /*
    How-to?
    1. Get first node, A
    2. Get second node, B
    3. Get third node, C
    4. Point B at A
    5. Rename B to A,
    6. Rename C to B,
    7. Get new node C
    8. Go to 4., repeat until there is no new node to get at C
    9. Point B to A
    This is iterative, time complexity should be O(n), since it only moves through the list once.
  */  
};

function thirdFromLast(linkedList) {
  /* 
    1. Get 1st item in list, A
    2. Move 2 spots up in list to 3rd item, B
    3. Move A and B up one spot each until B.next === null
    4. Return A
  */
};

function middleOfList(linkedList) {
  /* 
    1. Get 1st item in list, A
    2. Get 1st item in list, call it B
    3. Move A up one spot and B up 2 spots
    4. Repeat 3 until B.next === null
    5. Return A
  */
};

function cycleList(linkedList) {
  /* 
    1. Get 1st item in list, A
    2. Get 1st item in list, B
    3. Check to see if A = B, if so return true
    4. Move B up one, repeat from step 3
    5. When B === null, move A up one
    6. Get Ath item in list, B
    7. Repeat from step 3 until A === null
    8. Return false
  */
};

function sortList(linkedList) {
  /*
    I have no idea where to start on this without just creating another list
    Figure out how to compare values while only going through list once and not storing sorted values elsewhere?
    Maybe a quicksort, but does that require another data structure?
  */
};

module.exports = {
  main,
  display,
  size,
  isEmpty,
  findLast,
  reverseList,
  thirdFromLast,
  middleOfList,
  cycleList,
  sortList,
}