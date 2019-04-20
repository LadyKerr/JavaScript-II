// Create a higher order function and invoke the callback function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/

// Problem 1
 // getLength passes the length of the array into the callback.
function getLength(arr, cb) {
 return cb(arr.length);
}
getLength(items, function(length) {
  console.log(length);
});


// Problem 2
// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(arr[3]);
}
last(items, function(lastItem) {
  console.log(lastItem);
});


// Problem 3
// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x,y);
}
function sum(x, y) {
  return x + y;
}
console.log(sum(20,10));


// Problem 4
// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x,y);
}
function multiply(x,y) {
  return x * y;
}
console.log(multiply(500,10));


// Problem 5
// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false. 
// Use .includes() method
function contains(item, list, cb) {
  return cb(list.includes(item));
}

contains('Eraser', items, function(check) {
  console.log(check);
});

contains('Notebook', items, function(check) {
  console.log(check);
});


/* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
function removeDuplicates(array, cb) {
  
}
