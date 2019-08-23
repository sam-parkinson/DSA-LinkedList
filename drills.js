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

function reverseList(linkedList) {};

function thirdFromLast(linkedList) {};

function middleOfList(linkedList) {};

function cycleList(linkedList) {};

function sortList(linkedList) {};

module.exports = {
  main,
  display,
  size,
  isEmpty,
  findLast,
}