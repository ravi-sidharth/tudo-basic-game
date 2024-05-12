// Answer to the question number:1

arr=[]
 
 const input = require("readline-sync")
 let n = input.questionInt("Enter the length of the array:");
 let num = input.questionInt("Enter the target:") 

 for (let i=0; i<n; i++) {
    let element = input.questionInt("Enter the element of array:")
    arr.push(element);
 }
 console.log(arr);

 for (let i=0; i<n; i++) {
    
    if (arr[i]==num) {
        arr.splice(i,1);
        i--;
    }

 }
 
 console.log(arr);