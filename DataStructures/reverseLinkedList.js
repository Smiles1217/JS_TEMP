//Samuel Miles
//10/27/2019

//Reverse a Linked List:

//
//Construct a Singly Linked List from an Array, Reverse the Order of the Elements in the List, and Output both the Forward and Reversed Lists
//

//Assigns Random Values 1 to 100 to Array of Length n
function randFillArray(n) {
    var temp = [];

    for (var i = 0; i < n; i++) {
        temp[i] = Math.floor(Math.random() * 100 + 1);
    }

    return temp;
}

//List Node Class:
class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Converts an Array into a Linked List:
function arrayList(arr, head) {
    var prev = curr = null;

    for(var i = 0; i < arr.length; i++) {
        curr = new node(arr[i]);
        
        if(i == 0) {
            head = curr;                    //If this is the Start of the List
            prev = curr;
        }

        else {
            prev.next = curr;               //Otherwise, just add to the list
            prev = curr;
        }
    }
    return head;
}

//Reverse Linked List:
function reverseList(head) {
    var prev = next = null;
    var curr = head;

    while(curr != null) {               //While there are still Elements in the List:
        next = curr.next;                   //Next Node to be Processed
        curr.next = prev;                   //Reverse the .next Pointer
        prev = curr;                        //Set the Current Node to be the Previous Node for the next Iteration
        curr = next;                        //Set the Current Node to the Next Node to be Processed
    }
    head = prev;                            //Set the Newly Reversed List Head
    return head;
}

//Output Linked List:
function outputList(head) {
    for(var temp = head; temp != null; temp = temp.next) {      //Print All Elements in Linked List
        console.log(temp.data);
    }
}

//
// Main:
//
var n = 5;                                  //Size of the Array
var arr = randFillArray(n);

console.log(arr);                           //Un-Sorted Array

var head = arrayList(arr, null);            //Make Singly Linked List from Random Array

outputList(head);                           //Output Forward Linkd List

var revHead = reverseList(head);            //Reverse the Linked List

outputList(revHead);                        //Output Reversed Linked List