//Samuel Miles
//10/27/2019

//Tree Traversals:

//
//Construct a Binary Tree from an Array and Output the Values using Pre-, Post-, and In-Order Traversals of the Tree
//

//Assigns Random Values 1 to 100 to Array of Length n
function randFillArray(n) {
    var temp = [];

    for (var i = 0; i < n; i++) {
        temp[i] = Math.floor(Math.random() * 100 + 1);
    }

    return temp;
}

//Tree Node Class:
class node {
    constructor(data) {
        this.data = data;
        this.LChild = null;
        this.RChild = null;
    }
}

//Converts an Array into a Tree [Parent, LChild, RChild, etc...]:
function arrayTree(arr, root, index) {
    if(index < arr.length) {
        root = new node(arr[index]);

        root.LChild = arrayTree(arr, root.LChild,2*index + 1);
        root.RChild = arrayTree(arr, root.RChild,2*index + 2);
    }
    return root;
}

//In-Order Traversal (Left, Root, Right):
function inOrder(root) {
    if(root == null) {
        return;
    }
    inOrder(root.LChild);
    console.log(root.data);
    inOrder(root.RChild);
}

//Pre-Order Traversal (Root, Left, Right):
function preOrder(root) {
    if(root == null) {
        return;
    }
    console.log(root.data);
    preOrder(root.LChild);
    preOrder(root.RChild);
}

//Post-Order Traversal (Left, Right, Root):
function postOrder(root) {
    if(root == null) {
        return;
    }
    postOrder(root.LChild);
    postOrder(root.RChild);
    console.log(root.data);
}

//
// Main:
//
var n = 10;                                //Size of the Array
var arr = randFillArray(n);

console.log(arr);                          //Un-Sorted Array

var root = arrayTree(arr, null, 0);        //Make Tree from Random Array

inOrder(root);                             //Output Node Values using various Traversal Techniques
preOrder(root);
postOrder(root);