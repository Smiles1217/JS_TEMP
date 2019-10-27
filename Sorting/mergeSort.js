//Samuel Miles
//10/24/2019

//Recursive Merge-Sort: (WIP)

//
//***NOTES***
//

//Assigns Random Values 1 to 100 to Array of Length n
function randFillArray(n) {
    var temp = [];

    for (var i = 0; i < n; i++) {
        temp[i] = Math.floor(Math.random() * 100 + 1);
    }

    return temp;
}

//Splits Array into 2 Equal Halves
function splitArray(arr) {
    var h1 = [], h2 = [];

    for(var i = 0; i < arr.length/2; i++) {
        h1[i] = arr[i];
    } 

    if((arr.length) % 2 == 0) {
        for(var i = 0; i < arr.length/2; i++) {
            h2[i] = arr[Math.ceil(i + arr.length/2)];
        } 
    }

    else {
        for(var i = 0; i < (arr.length/2) - 1; i++) {
            h2[i] = arr[Math.ceil(i + arr.length/2)];
        } 
    }

    return [h1, h2];
}

function mergeSort(arr) {
    if(arr.length > 1) {
        var split = splitArray(arr);
        var L = split[0];
        var R = split[1];
        var out = [];

        //console.log(L);    //TESTING
        //console.log(R);    //TESTING

        mergeSort(L);
        mergeSort(R);

        var i = j = k = 0;

        while(i < L.length && j < R.length) {
            if(L[i] < R[j]) {
                out[k] = L[i];
                i++;
            }
            else {
                out[k] = R[j];
                j++;
            }
            k++;
            console.log(out);
        }
    }
}

//
// Main:
//
var n = 5;                                  //Size of the Array
var arr = randFillArray(n);

console.log(arr);                           //Un-Sorted Array

mergeSort(arr);
//var sorted = arr.sort(function(a, b){return a - b});          //**THIS IS THE EASY WAY OUT**

console.log(arr);                        //Sorted Array
