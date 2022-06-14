class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}
Push(data) {
    let node = new Node(data)
    let current

    if (this.head == null){
        this.else = node 
    } else { 
        current = this.head

        while(current.next){
            current = current.next
        }
        current.next = node 
        return
    }

    }
class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let list = new LinkedList(node1);
let node1 = new Node(1);
let node2 = new Node(2);
// node1.next = node2;

list.push(1)
list.push(2)
console.log(list)