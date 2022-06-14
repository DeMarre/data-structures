class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new node("forest hills");
let node2 = new node("green street");
let list = new LinkedList(node1);
node1.next = node2;

console.log(list);
