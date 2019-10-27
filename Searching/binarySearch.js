//Samuel Miles
//10/27/2019

//Binary Search:

//
//Only Changes needed to make Iterative are to use a While Loop instead of Recursive Calls
//

//Assigns Random Values 1 to 100 to Array of Length n
function randFillArray(n) {
    var temp = [];

    for (var i = 0; i < n; i++) {
        temp[i] = Math.floor(Math.random() * 100 + 1);
    }

    return temp;
}

//Binary Search:
function binarySearch(arr, Hi, Lo, goal) {
    var Mid = Math.round((Hi - Lo) / 2);   //Find the Midpoint Interval of the Array

    //console.log(Hi);        //TEMP
    //console.log(Mid);        //TEMP
    //console.log(Lo);        //TEMP

    //Adjust the Midpoint to be Accurate Relative to Hi and Lo, if Necessary
    if(Mid > Hi) {
        Mid = Hi - Mid;
    }

    if(Mid < Lo) {
        Mid = Mid + Lo;
    }

    //console.log(arr);        //TEMP
    //console.log(Hi);        //TEMP
    //console.log(Mid);        //TEMP
    //console.log(Lo);        //TEMP

    if(Hi - Mid == 0 || Mid - Lo == 0) {    //If Eiher Interval is Empty (0), then the Value was NOT Found in the Array
        return -1;
    }

    if(goal < arr[Mid]) {                   //If the goal Less then the Midpoint Value,
        return binarySearch(arr, Mid, Lo, goal); //Recursively call to Search the Left Hand Side
    }

    if(goal > arr[Mid]) {                   //Otherwise the goal is Greater then the Midpoint Value,
        return binarySearch(arr, Hi, Mid, goal); //Recursively call to Search the Right Hand Side
    }

    else {                                  //Otherwise,
        return Mid;                             //The Value was Found, Return the Index
    }
}

//
// Main:
//
var n = 10;                                  //Size of the Array
var arr = randFillArray(n);

var sorted = arr.sort(function(a, b){return a - b});          //Super-Easy Quick Sort

console.log(arr);                           //Sorted Array

var goal = 10;                              //Value to Search for in the Array

console.log('Goal Value:', goal);

var index = binarySearch(arr, n - 1, 0, goal);

console.log('The Index of the Goal Value (-1 = DNE):', index);  //Index of Goal Value
