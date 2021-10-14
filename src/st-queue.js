const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.front = null;
    this.tail = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    let newNode = new ListNode(value)
    if(!this.front) {
      this.front = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if(!this.front) {
      return null;
    }
    const temp = this.front;
    if (this.front === this.tail) {
      this.tail = null;
    }
    this.front = this.front.next;

    this.size--;
    return temp.value;
  }
}
