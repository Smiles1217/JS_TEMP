//Samuel Miles
//10/27/2019

//Queue Structure and Operations (WIP):

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



//
// Main:
//
var n = 5;                                  //Size of the Array
var arr = randFillArray(n);

console.log(arr);                           //Un-Sorted Array