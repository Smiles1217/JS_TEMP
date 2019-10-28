//Samuel Miles
//10/28/2019

//Heap Data Structure and Operations (WIP):

//
//Basic Implementation of a Binary Heap Data Structure with Relevant Operations and Helper Functions
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
    constructor(val) {
        this.val = val;
    }
}

//Heap Class:
class heap {
    constructor() {
        this.entries = [];
    }

    addVertex() {
        
    }

    addEdge() {

    }

    printGraph() {

    }

    bfs() {

    }

    dfs() {

    }
}



//
// Main:
//
var n = 5;                                  //Size of the Array
var arr = randFillArray(n);

console.log(arr);                           //Un-Sorted Array