//Samuel Miles
//10/28/2019

//Queue Data Structure and Operations:

//
//Basic Implementation of a Queue Data Structure with Relevant Operations and Helper Functions
//

//Assigns Random Values 1 to 100 to Array of Length n
function randFillArray(n) {
    var temp = [];

    for (var i = 0; i < n; i++) {
        temp[i] = Math.floor(Math.random() * 100 + 1);
    }

    return temp;
}

//Queue Node Class:
class node {
    constructor(data) {
        this.data = data;
    }
}

//Queue Class:
class queue {
    constructor() {
        this.entries = [];
    }

    enqueue(node) {
        this.entries.push(node);                         //Add a new Entry to the Queue
    }

    dequeue() {
        if(this.entries.length == 0) {
            return "Underflow";                             //If the Queue is Empty, there is an Underflow
        }
        return this.entries.shift();                        //Return the Next Entry and Remove it from the Queue
    }

    peek() {
        return this.entries[this.entries.length - 1];       //Return the Next Entry, but DOES NOT Remove it from the Queue
    }

    getLength() {
        return this.entries.length;                         //Return the Number of Entries on the Queue
    }

    isEmpty() {
        return (this.entries.length == 0);                  //Return True if the Queue is Empty, False Otherwise
    }

    print() {
        var str = "";
        for(var i = 0; i < this.getLength(); i++) {           //Concatenate all Entries into a Single String to be Returned and Output
            str += this.entries[i].data + " ";
        }
        return str;
    }
}

//
// Main:
//
var n = 5;                                  //Size of the Array
var arr = randFillArray(n);                 //Random Case
//var arr = [45, 83, 59, 21, 86];           //Edge Case

console.log(arr);                           //Un-Sorted Array

var temp = new queue;

for(var i = 0; i < n; i++) {
    temp.enqueue(new node(arr[i]));
}

console.log(temp.print());                  //Output all Entries in Queue
console.log(temp.dequeue().data);           //Pop Value from Front of Queue