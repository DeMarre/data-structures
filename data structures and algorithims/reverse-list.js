class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  Push(data) {
    let node = new Node(data);
    let current;

    if (this.head == null) {
      this.else = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
      return;
    }
  }
  reverseIterative(node) {
    let prev = null;
    let current = node;
    let next = null;

    while (current != null) {
      next = current.next;
      current.next = prev;
      //  null <- L -> null
      prev = current;
      current = next; //ns
    }
    node = prev;
    return node;
  }
}
class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// reverse(node) {
//   let prev = null;
//   let current = node;
//   let next = null;

//       while (current != null) {
//           next = current.next;
//           current.next = prev;
//           prev = current;
//           current = next;
//       }
//       node = prev;
//       return node;
//   }

let list = new LinkedList(node1);
let node1 = new Node(1);
let node2 = new Node(2);
// node1.next = node2;

list.push(1);
list.push(2);
list.push(3);
console.log(list);

console.log(list.reverse(list));
