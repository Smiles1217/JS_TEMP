//Samuel Miles
//10/27/2019

//Stack Data Structure and Operations:

//
//Basic Implementation of a Stack Data Structure with Relevant Operations and Helper Functions
//

//Assigns Random Values 1 to 100 to Array of Length n
function randFillArray(n) {
    var temp = [];

    for (var i = 0; i < n; i++) {
        temp[i] = Math.floor(Math.random() * 100 + 1);
    }

    return temp;
}

//Stack Node Class:
class node {
    constructor(data) {
        this.data = data;
    }
}

//Stack Class:
class stack {
    constructor() {
        this.entries = [];
    }

    push(node) {
        this.entries.unshift(node);                            //Push a new Entry onto the Stack
    }

    pop() {
        if(this.entries.length == 0) {
            return "Underflow";                             //If the Stack is Empty, there is an Underflow
        }
        return this.entries.shift();                          //Return the Next Entry and Remove it from the Stack
    }

    peek() {
        return this.entries[this.entries.length - 1];       //Return the Top of the Stack, but DOES NOT Remove it from the Stack
    }

    getLength() {
        return this.entries.length;                         //Return the Number of Entries on the Stack
    }

    isEmpty() {
        return (this.entries.length == 0);                  //Return True if the Stack is Empty, False Otherwise
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

var temp = new stack();                    //Initiate New Stack

for(var i = 0; i < n; i++) {                //Populate Stack with Array Values
    temp.push(new node(arr[i]));
}

console.log(temp.print());                  //Output all Entries in Stack
console.log(temp.pop().data);               //Pop Value from Top of Stack