class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, value) {
    if(this.head === null) {
      this.insertFirst(item)
    }
    else {
      let currNode = this.head;
      let prevNode = this.head;
      while (currNode.next.value !== value) {
        if (currNode.next === null) {
          currNode.next = new _Node(item, null);
          return;
        }
        else {
          prevNode = currNode;
          currNode = currNode.next;
        }
      }
      const newNode = new _Node(item, currNode.next)
      prevNode.next = newNode;
      return;
    }
  }

  insertAfter(item, value) {
    if(this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head;
      while (tempNode.value !== value) {
        if (tempNode.next === null) {
          tempNode.next = new _Node(item, null);
          return;
        }
        else {
          tempNode = tempNode.next;
        }
      }
      const newNode = new _Node(item, tempNode.next)
      tempNode.next = newNode;
      return;
    }
  }

  insertAt(item, ind) {
    if (this.head === null) {
      this.insertFirst(item)
    }
    else {
      let tempNode = this.head;
      for (let i = 0; i < (ind - 1); i++) {
        if (tempNode.next === null) {
          tempNode.next = new _Node(item, null);
          return;
        }
        else {
          tempNode = tempNode.next;
        }
      }
      const newNode = new _Node(item, tempNode.next)
      tempNode.next = newNode;
      return;
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;