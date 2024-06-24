//Object and object methods
let userDetails = {
  name: "cossie",
  surname: "Kingsley",
  age: 30,
  complexion: "fair",
  height: " 5'ft",
  faculty: "Education",
  "base house": "52 kelvin lane",
  hobbies: ["Handball", "Traveling", "Reading"],
  fullName: function () {
    console.log(this.name + " + " + this.surname);
  },
};
console.log(userDetails.fullName);
console.log("==================");

console.log(userDetails.height);
console.log("==================");
//Add to object

userDetails.isMarried = false;
console.log(userDetails);

console.log("==================");

//delete
delete userDetails.age;
console.log(userDetails);

console.log("==================");

let str = "Hi";

console.log(str[0]);
console.log("==================");

let strg = "Widget id strong as an ox";

console.log(strg.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
console.log(strg.indexOf("widget")); // -1, not found, the search is case-sensitive

console.log(strg.indexOf("on"));
console.log("==================");
// includes checks whether it is found or not (true or false)

// console.log(strg.includes("strong"));
// console.log(strg.includes("Hello"));
console.log("==================");

let strn = "stringify";

// these are same for substring
// console.log(strn.substring(-2, 6)); // "ring"
// console.log(strn.substring(6, 2)); // "ring"

// ...but not for slice:
// console.log(strn.slice(2, 6)); // "ring" (the same)
// console.log(strn.slice(6, 2));

console.log("==================");

let texr = "23, 5, 6 , 12, 1, 59, 09, 10, 224, 102";

let tel = texr
  .split(",")
  .sort()
  .reduce((y, x) => Number(y) + Number(x));
console.log(tel);

console.log("==================");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = arr.reduce((a, b) => a + b);

console.log(result);

console.log("==================");

const phNumb = "09023144712";
console.log(phNumb.length);
let countryCode = `+234 ${phNumb.slice(1, 4)}-${phNumb.slice(
  5,
  8
)}-${phNumb.slice(9, phNumb.length)}`;
console.log(countryCode);

//filter
//map

const drivers = ["james", "John", "Kenny", "Felicia", "Timilehin", "Samjenny"];

for (index = 0; index < drivers.length; index++) {
  // console.log(drivers[index]);
  const resulty =
    drivers[index].charAt(0).toUpperCase() + drivers[index].slice(1);
  console.log(resulty);
}

//

console.log("==================");

let hello = "hello guys how are you doing";
const arryJoin = hello.split(" ");
console.log(arryJoin);
let resul = "";
for (i = 0; i < arryJoin.length; i++) {
  const arJon = arryJoin
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  resul = arJon;
  //const arJon = arryJoin[i].charAt(0).toUpperCase() + arryJoin[i].slice(1);
  //console.log(arJon);

  //let resul = arJon.split(" ");

  // const stJon =
  // console.log(arJon);
  //console.log(resul);
  // let combineArr = arryJoin[0] + arryJoin[1] + arryJoin[2];
  // console.log(combineArr);

  // let combineArr = s;
  // console.log(combineArr);
  //[ ...arJon2]
}
console.log(resul);

//Image gallery

//image
//name
//price
//description
//brand

let sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(sheep) {
  // TODO
  return sheep.filter((lamp) => lamp == true).length;
}

console.log(countSheeps(sheep));

let stacks = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

function findNeedle(haystack) {
  // your code here

  //   for(i = 0; i < haystack.length; i++){
  //     if(haystack[i] == 'needle'){
  //       return `found the needle at position ${i}`
  //     }
  //   }

  let find = haystack.find((needle, index) => {
    if (needle == "needle") {
      return `found the needle at position ${index}`;
      //console.log(needle, index);
    }
  });
}

findNeedle(stacks);

function removeChar(str) {
  //You got this!

  if (str.length >= 2) {
    return str.slice(1, str.length - 1);
    //str.substr(0)
  }
}
console.log(removeChar("string"));

function squareDigits(num) {
  let splitArray = num.toString().split("");
  let splitResult = "";

  for (let i = 0; i < splitArray.length; i++) {
    const result = splitArray[i] * 2;
    splitResult += `-${result}`;
  }
  return splitResult.slice(1);
}

console.log(squareDigits(12345));
console.log("==============");
const numArr = [1, -4, 7, 12, 5, -12, 15];

console.log(numArr.filter((numArr) => numArr >= 0).reduce((a, b) => a + b));

// numArr.map((num) num )
console.log("------------");
// numArr.indexOf

const binaryNum = [1, 0, 1, 1];
const binaryArrayToNumber = (arr) => {
  // your code

  let result = [];

  const reservedIndex = binaryNum.reverse();

  for (i = binaryNum.length - 1; i >= 0; i--) {
    result.push(2 ** i * reservedIndex[i]);
  }

  console.log(result.reduce((a, b) => a + b));
};
binaryArrayToNumber();
console.log("br");

function seriesSum() {
  for (let i = 1; i < 6; i++) {
    if (i % 3 == 0) {
      console.log(eval(`1 + ${1 + "/" + (i + 1)}`));
    }
  }
}

seriesSum();

console.log("--------------");

//let vowel = ["a", "e", "i", "o", "u"];

function disemvowel(str) {
  // let extracted = vowel.join(",");
  // console.log(extracted);

  // return str;
  function disemvowel(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (!"aeiou".includes(str[i].toLowerCase())) {
        result += str[i];
      }
    }
    return result;
  }
}

str = "This is a sample text.";
console.log(disemvowel(str));

console.log("--------------");

function XO(str) {
  //code here
  let string = str.split("");
  let x = "";
  let o = "";

  for (i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == "o") {
      o += string[i];
    } else if (string[i].toLowerCase() == "x") {
      x += string[i];
    }
  }
  if (x.length == o.length) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("ooxxx"));

console.log("----------------");

const arrayInvers = [1, -2, 3, 4, -5];

function invert(array) {
  let result = [];
  for (i = 0; i < arrayInvers.length; i++) {
    if (arrayInvers[i] < 0) {
      result.push(+arrayInvers[i].toString().slice(1));
    } else {
      result.push(arrayInvers[i] * -1);
    }
  }

  console.log(result);
}

invert();

console.log("----------------");

function oddOrEven(array) {
  //enter code here

  let sumTotal = array.reduce((a, b) => a + b, 0);
  if (sumTotal % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log("----------------");

function reverseWords(str) {
  // Go for it
  let result = [];
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    result.push(split[i].split("").reverse().join(""));
  }
  console.log(result.join(" "));
}
reverseWords("This is an example!");

console.log('=============')

let isSquare = function(n){
 
  let squaring = Math.sqrt(n)
  if(Number.isInteger(squaring)){
    return true;
  }else{
    return false; // fix me
  }
  
}

console.log(isSquare(25))

console.log('+++++++++++++')



var summation = function (num) {
  // Code here
  let numb = [3, 5, 6, 7, 8, 9, 45, 333];
  numb.reduce((a, b) => a + b, 0)
}
console.log(summation())

let numb = [3, 5, 6, 7, 8, 9, 45, 333];
  console.log(numb.reduce((a, b) => a + b, 0))
  

  var summation = function (num) {
    let x = []
    for(let i = 1; i < num+1; i++){
      x.push(i)
    }
    return x.reduce((a, b) => a + b, 0)
  }

  console.log('+++++++++++++')

  function century(year) {
    // Calculate the century
  let century = Math.ceil(year / 100);

  // Return the result
  return century;
}

console.log('+++++++++++++')

function makeNegative(num) {
  // Code?
  if(num > 0){
    let negated = num * -1
    return negated;
  }else{
    return num;
  }

}



// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].



console.log('+++++++++++++')

//if (!input || input.length === 0) {
//   return [];
// }

// let countPositives = 0;
// let sumNegatives = 0;

// for (let i = 0; i < input.length; i++) {
//   if (input[i] > 0) {
//     countPositives++;
//   } else if (input[i] < 0) {
//     sumNegatives += input[i];
//   }
  
// }

// return [countPositives, sumNegatives];

console.log('+++++++++++++')

function bmi(weight, height) {
  
  let bodyMass = weight / Math.pow(height, 2)
  
  if(bodyMass <= 18.5){
    return 'Underweight';
  } else if(bodyMass <= 25.0){
    return 'Normal';
  }else if(bodyMass <= 30.0){
    return 'Overweight';
  }else{
    return 'Obese';
  }
}
console.log('-----------')

// function getCount(str) {
//   let result = "";
//     for (let i = 0; i < str.length; i++) {
//       if ("aeiou".includes(str[i])) {
//         result += str[i];
//       }
//     }
//     return result.length;
//   }

//lower


function getCount(str) { 
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i]=='a' ||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
      count++;
    }
  }
return count;
  
}

console.log('|||||||||||||')

function squareSum(numbers){
  
    let numSqur = [1, 2, 3, 4]
  for(let i = 0; i < numSqur.length; i++){
    Math.pow(numSqur[index])
    console.log(numSqur)
  }
    // numSqur.reduce((a,b) => a + b, 0)

  }

  console.log('|||||||||||||')
    let words = 'This is a camel Case';

    console.log(words.split('').join(' '))
  // function solution(string) {
  //   if(words){
  //     words.join('')
  //   }else{
  //     return '';
  //   }
  //   console.log(words)
  // }

  function sortOddNumbers(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    const result = arr.map(num => (num % 2 === 0 ? num : oddNumbers.shift()));
    return result;
  }

  console.log('=========')

  function SeriesSum(n){
  // Happy Coding ^_^le 
   if (n === 0) {
    return '0.00';
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }

  // Round the answer to 2 decimal places
  return sum.toFixed(2);
  
}

console.log('=========')
function fakeBinary(x){
  let result = '';
  for (let i = 0; i < x.length; i++) {
    if (Number(x[i])>=5) {
      result += '0';
    } else {
      result += '1';
    }
  }
  return result;
}

console.log('=========')
function filter_list(l) {
  // Return a new array with the strings filtered out
return  l.filter(item => typeof item === 'number')
}

console.log('------------')
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  
    
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;


  
  //insert brilliant code here
  for(let i = 0; i < walk.length; i++){
    if(walk[i] === 'n'){
      north++
    } else if(walk[i] === 's'){
      south++
    } else if(walk[i] === 'e'){
      east++
    } else if(walk[i] === 'w'){
      west++
    }else{
      return false;
    }
  }
  return north === south && east === west;
}

console.log('------------')

function repeatStr (n, s) {
  return s.repeat(n)
}