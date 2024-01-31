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
      if (i === rawIndex - 1) {
        const newNode = new LinkedListNode(value, currentNode.next);
        currentNode.next = newNode;
        if (!currentNode.next) {
          this.tail = newNode;
        }
      }
      i++;
    }
  }

  delete(value) {}

  find({ value = undefined, callback = undefined }) {}

  deleteTail() {}

  deleteHead() {}

  fromArray(values) {}

  toArray() {}

  toString(callback) {}

  reverse() {}
}
