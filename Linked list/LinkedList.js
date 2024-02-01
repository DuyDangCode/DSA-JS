import LinkedListNode from './LinkedListNode.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  insert(value, rawIndex) {
    let index = 0;
    if (rawIndex === 0 || !this.head) {
      this.prepend(value);
    }
    for (
      let currentNode = this.head;
      currentNode !== null;
      currentNode = currentNode.next
    ) {
      if (index === rawIndex - 1) {
        const newNode = new LinkedListNode(value, currentNode.next);
        if (!currentNode.next) {
          this.tail = newNode;
        }
        currentNode.next = newNode;
      }
      index++;
    }
  }

  delete(value) {
    let preNode = this.head;
    let result = 0;
    for (
      let currentNode = this.head;
      currentNode !== null;
      currentNode = currentNode.next
    ) {
      if (currentNode.value === value) {
        if (currentNode.next === null) {
          this.tail = preNode;
        }
        if (preNode === currentNode) {
          this.head = currentNode.next;
          preNode = this.head;
        } else {
          preNode.next = currentNode.next;
        }
        result = 1;
      } else {
        preNode = currentNode;
      }
    }

    return result;
  }

  find({ value = undefined, callback = undefined }) {}

  deleteTail() {}

  deleteHead() {}

  fromArray(values) {}

  toArray() {
    const result = [];
    for (
      let currentNode = this.head;
      currentNode !== null;
      currentNode = currentNode.next
    ) {
      result.push(currentNode);
    }
    return result;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  reverse() {}
}
