//Samuel Miles
//10/28/2019

//Graph Data Structure and Operations (WIP):

//
//Basic Implementation of a Graph Data Structure with Relevant Operations and Helper Functions
//

//Assigns Random Values 1 to 100 to Array of Length n
function randFillArray(n) {
    var temp = [];

    for (var i = 0; i < n; i++) {
        temp[i] = Math.floor(Math.random() * 100 + 1);
    }

    return temp;
}

//Graph Class:
class graph {
    constructor(numVerticies) {
        this.numVerticies = numVerticies;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
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