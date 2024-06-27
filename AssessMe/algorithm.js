// const urlDomainGetter = () => {
//   let url = "";
//   let urlArray = ["h", "t", "t", "p", "s", ":", "/", "/", "c", "o", "m"];
//   // let shortner = url.;
//   return shortner;
// };

// console.log(urlDomainGetter("https://github.com/carbonfive/raygon"));

// const url = "https://github.com/carbonfive/raygon";
const url = "https://www.frontendmentor.io/home";
const address = url.split("/").filter((url) => url.includes("."));

console.log(address[0].split("."));

if (address[0].split(".").length > 2) {
  console.log(address[0].split(".")[1]);
} else {
  console.log(address[0].split(".")[0]);
}

const integers = [2, 6, 89, 55, 1, 0, 8787];

console.log(integers.sort((a, b) => a - b)[integers.length - 1]);

function countBy(x, n) {
  let z = [];

  for (i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

console.log(countBy(2, 5));


var number=function(array){
  //your awesome code here
return  array.map((line, index) => `${index + 1}: ${line}`);

}

function stray(numbers) {
  let commonNum = numbers[0] === numbers[1] ? numbers[0] : numbers[2];
 return  numbers.find(num => num !== commonNum)
  
}

function firstNonConsecutive(arr) {
 

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Check if the current element is not consecutive
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i];
    }
  }

  // If all elements are consecutive, return null
  return null;
}


var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
if(typeof iterable === 'string'){
  iterable = iterable.split('')
}
  const iterableArray = []
  
  for(let i = 0; i < iterable.length; i++){
    if (i === 0 || iterable[i] !== iterable[i - 1]) {
     iterableArray.push(iterable[i]);
    }
  }
  return iterableArray;
}

function doubleChar(str) {
  // Your code here
 return str.split('').map(char => char + char).join('')
}

function isPalindrome(x) {
  //Reversed words
  let str = String(x).toLowerCase();
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out
// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
  //TODO
   let tills = new Array(n).fill(0);
  customers.forEach(customer => {
    let minTillIndex = tills.indexOf(Math.min(...tills));
    tills[minTillIndex] += customer;
  });
  return Math.max(...tills);
}


function countSmileys(arr) {
  const validSmiley = /^[:;][-~]?[)D]$/;
 
   // Initialize count of valid smileys
   let count = 0;
 
   // Iterate through each smiley in the array
   arr.forEach(smiley => {
     if (validSmiley.test(smiley)) {
       count++;
     }
   });
 
   return count;
 }