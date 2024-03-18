// Define the Node class for creating nodes in the linked list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Define the LinkedList class for managing the linked list
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Method to add a new node to the end of the list
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method to reverse the linked list
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  
    // Method to print the linked list elements
    printList() {
      let current = this.head;
      const elements = [];
      while (current) {
        elements.push(current.data);
        current = current.next;
      }
      console.log(elements.join(' -> '));
    }
  }
  
  // Helper function to create a linked list and perform operations
  function main() {
    const linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
  
    console.log('Original List:');
    linkedList.printList();
  
    linkedList.reverse();
  
    console.log('Reversed List:');
    linkedList.printList();
  }
  
  // Execute the main function
  main();
  