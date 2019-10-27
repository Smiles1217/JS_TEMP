//Samuel Miles
//10/27/2019

//Recursive Quick-Sort:

//
//Only Changes needed to make Iterative are to use an Auxilliary Stack to store Sorted Elements
//

//Assigns Random Values 1 to 100 to Array of Length n
function randFillArray(n) {
    var temp = [];

    for (var i = 0; i < n; i++) {
        temp[i] = Math.floor(Math.random() * 100 + 1);
    }

    return temp;
}

//Partition Array based on Pivot
function partition(arr, Hi, Lo) {
    var x = arr[Hi];                        //Pivot is Last Element of Array
    var i = (Lo - 1);
    var temp = 0;

    console.log(x);        //TEMP

    for(var j = Lo; j <= Hi - 1; j++) {
        if(arr[j] <= x) {                   //If Element being Checked is Less than Pivot
            i++;
            temp = arr[i];                  //Swap Elements to shift Checked one Left
            arr[i] = arr[j];                //I used a temp variable so that I didn't have to write a swapping function
            arr[j] = temp;
        }
    }
    temp = arr[i + 1];                      //Swap Pivot after checking all Elements against it
    arr[i + 1] = arr[Hi];
    arr[Hi] = temp;

    return (i + 1);                         //Return Index of Pivot
}

function quickSort(arr, Hi, Lo) {
    if(Lo < Hi) {
        var p = partition(arr, Hi, Lo);     //Set the Pivot and Partition the Array

        console.log(p);        //TEMP
        console.log(Hi);       //TEMP
        console.log(Lo);       //TEMP

        quickSort(arr, p - 1, Lo);           //Left Hand Side of Partition
        quickSort(arr, Hi, p + 1);           //Right Hand Side of Partition
    }
}

//
// Main:
//
var n = 5;                                  //Size of the Array
var arr = randFillArray(n);

console.log(arr);                           //Un-Sorted Array

quickSort(arr, n - 1, 0);

console.log(arr);                           //Sorted Array
