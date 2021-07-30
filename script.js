// Write a function that computes the sum of numbers from 1 to n

//  SOLUTION

function computeSum(n) {
  if (n === 0) return 1;
  //   5 == 0 ? False

  // 4 === 0 ? False

  // 3 === 0 ? False

  // 2 === 0 ? False

  //   1 === 0 ? False

  // 0 === 0 ? True

  // Therefore, n === 1 now

  return n * computeSum(n - 1);
  //  5 * computeSum(4);
  // 4 * computeSum(3);
  // 3 * computeSum(2);
  // 2 * computeSum(1);
  //   1 * computerSum(0);
}

console.log(computeSum(5));

// What is recursion ?

// Recursion is a programming technique in which the solution to one big problem is dependent on the solutions of each of the sub problems inside of it. Recursion is usually expressed as a function that calls itself over and over until it reaches some stopping condition.
// Every recursive function has two parts: The base case(stopping condition) and the recursive call to that same function, usually with different arguments than what was passed in the first time.

// Solution 1: Solving Recursively
// function countDown(n) {
//   if (n <= 0) {
//     console.log("All done!");
//     return;
//   }
//   console.log(n);
//   n--;
//   countDown(n);
// }

// countDown(5);

// Solution 2: Regular Looping

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

countDown(5);

// console.log(countDown(5));

// Second Recursive Function

//  FACTORIAL ~ RECURSION

// Iterative solution
// function factorial(num) {
//   let total = 1;
//   for (var i = num; i > 1; i--) {
//     total *= i;
//   }

//   return total;
// }

// console.log(factorial(4));

// recursive solution

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3));

// Naive solution
// function getOdds(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Using recursion : HELPER METHOD RECURSION

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getOdds(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

console.log(getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Find the nth fibonaci number in the array sequence

function fib(n) {
  if (n < 1) return null;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(3));

console.log("-----------count down solution 1-------------");

function countDownWhileLoop(x) {
  while (x > 0) {
    console.log(x);
    x--;
  }
  console.log("All Done!");
}

countDownWhileLoop(5);

function countDownForLoop(y) {
  for (let i = y; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

countDownForLoop(10);

function countDownRecursive(z) {
  if (z <= 0) {
    console.log("All done!");
    return;
  }
  console.log(z);
  countDownRecursive(z - 1);
}

countDownRecursive(7);

console.log("------------- SumRange Solution -------------");
//
function sumRange(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRange(n - 1, total + n);
}

console.log(sumRange(3));

console.log("------------ HELPER METHOD RECURSION --------");

function findOddNums(arr) {
  let oddNums = [];
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      oddNums.push(helperInput[0]);
    }
    // Recursive occurs here
    helper(helperInput.slice(1));
  }
  helper(arr);
  return oddNums;
}

console.log(findOddNums([6, 5, 4, 3, 2, 1]));

console.log("---------------- POWER TO BASE -------------------");

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
  //  2 * power(2, 1)
  // 2 * power(2, 0)
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));

console.log("-------------- product of array ----------");

function productOfArray(arr, arrayLength = arr.length) {
  if (arrayLength <= 0) {
    return 1;
  }
  return productOfArray(arr, arrayLength - 1) * arr[arrayLength - 1];
  // 6 * arr[4]; = 6 * 4 == 24
  //  2 * arr[2]; == 2 * 3 = 6
  //  1 * arr[1];  == 1 * 2 = 2
  //  1 * arr[0]; == 1 * 1 = 1
}
console.log(productOfArray([1, 2, 3, 4]));

console.log("----------------- Recursive Range --------------");

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num <= 0) return 0;
  return num + recursiveRange(num - 1);
  // 3 + recursiveRange(2) == 3 + 3 === 6
  // 2 + recursiveRange(1) == 2 + 1 === 3
  // 1 + recursiveRange(0) == 1 + 0 === 1
}

console.log(recursiveRange(3));

console.log("--------------- Fib ------------------");
// 1,1,2,3,5,8,13,21, etc
function fibo(num) {
  if (num < 2) return num;
  return fibo(num - 1) + fibo(num - 2);
}

console.log(fibo(4));

console.log("------------ Compare the triplets - HackerRank ------------");

//  Alice - a = (a[0],a[1], a[2])
//  Bob - b = (b[0],b[1],b[2])
// The task is to find their comparison points by comparing
// a[0] with b[0], a[1] with b[1], and a[2] with b[2].

//  Conditions:
// If a[i] > b[i], Alice is awarded 1 point
// If a[i] < b[i], then Bob is awarded 1 point
// If a[i] = b[i], then neither person receives a point.

// returns an array: [Alice's score, Bob's Score]

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }
  return [alice, bob];
}
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));

function aVeryBigSum(ar, len = ar.length) {
  if (len === 0) return 0;

  return aVeryBigSum(ar, len - 1) + ar[len - 1];
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);

console.log("-------------- Diagonal Diff ----------- ");

function diagonalDifference(arr) {
  let len = arr.length;
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;

  for (let i = 0; i < len; i++) {
    firstDiagonalSum += arr[i][i];
    secondDiagonalSum += arr[len - 1 - i][i];
  }
  return Math.abs(firstDiagonalSum - secondDiagonalSum);
}

// let flat = arr.flat();
// let firstDiagonalSum =
//   flat[0] + flat[Math.floor(flat.length / 2)] + flat[flat.length - 1];
// let secondDiagonalSum =
//   flat[2] + flat[Math.floor(flat.length / 2)] + flat[flat.length - 3];
// return secondDiagonalSum - firstDiagonalSum;

// diagonalDifference([1, 2, 3, 4, 5, 6, 9, 8, 9]);

// diagonalDifference([
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ]);

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

function reverse(str) {
  let newArr = "";

  // Using the while loop iterator
  let i = str.length - 1;
  while (i >= 0) {
    newArr += str[i];
    i--;
  }
  // Using the For Loop Iterator
  // for (let i = str.length - 1; i >= 0; i--) {
  //   newArr += str[i];
  // }
  return `"${newArr}"`;
}

console.log(reverse("awesome"));

// reverse("awesome");

function reverseRecursive(str) {
  if (str === null || str.length <= 1) return str;
  return reverseRecursive(str.slice(1)) + str[0];
}

console.log(reverseRecursive("awesome"));

//  IS PALINDROME
//  able was I ere I saw elba => This is a palindrome
// function isPalindrome(str) {
//   let newStr = str.replace(/\s/g, "").toLowerCase();
//   if (newStr.length <= 1) {
//     return true;
//   } else if (newStr[0] !== newStr[newStr.length - 1]) {
//     return false;
//   }
//   return true;
// }

// Is Palindrome Recursive
function isPalindrome(str) {
  let newStr = str.replace(/\s/g, "").toLowerCase();
  if (newStr.length <= 1) {
    return true;
  } else if (newStr[0] !== newStr[newStr.length - 1]) {
    console.log(newStr[0]);
    return false;
  } else {
    return isPalindrome(newStr.slice(1, newStr.length - 1));
  }
}

console.log(isPalindrome("able was I ere I saw elbaba"));

console.log("----------- some recursive ---------------");
//  Some Recursive method 1:
function someRecursive(arr, callbk = (val) => val % 2 !== 0) {
  if (arr.length === 0) return false;
  if (callbk(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), callbk);
}
console.log(someRecursive([4, 6, 8]));

console.log("------ Flatten ------");

function flatten(arr) {
  let result = [];
  function helper(array) {
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      if (Array.isArray(element)) {
        helper(element);
      } else {
        result.push(element);
      }
    }
  }
  helper(arr);
  return result;
}

console.log(flatten([1, 2, [3, 4], [5], [6], [7, 8, 9], [[[[[[[[[10]]]]]]]]]]));

// function capitalizeFirst(arr) {
//   let result = [];
//   for (let words of arr) {
//     let firstChar = words[0];
//     if (firstChar) {
//       let upperCaseChar = firstChar.toUpperCase();
//       result.push(upperCaseChar + words.slice(1));
//     }
//   }
//   return result;
// }
console.log("-------------- CAPITALIZE FIRST RECURSIVE ------------------");
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

console.log(capitalizeFirst(["sam", "car", "taco", "banana", "aquila"]));
// capitalizeFirst(["car", "taco", "banana"]);

function capitalizedWords(arr) {
  return arr.toString().toUpperCase().split(",");
}

let words = ["i", "am", "learning", "recursion"];
// ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(capitalizedWords(words));

console.log("------------ Stringify Numbers Recursive ------------------- ");

// function stringifyNumbers(obj) {
//   var newObj = {};
//   for (var key in obj) {
//     if (typeof obj[key] === "number") {
//       newObj[key] = obj[key].toString();
//     } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
//       newObj[key] = stringifyNumbers(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof (obj[key] === "string")) {
      result.push(obj[key]);
    }
  }
  return result;
}

collectStrings(obj); // ["foo", "bar", "baz"])
console.log(collectStrings(obj));

// SEARCHING ALGORITHM

let sampleArr = [2, 4, 6, 8, 9];

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(sampleArr, 99));

console.log("---------------- BIN SEARCH -------------");

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === val ? mid : -1;
}

console.log(binarySearch(sampleArr, 9));
// binarySearch(sampleArr, 9);

console.log("------- Recursive Binary Search ------ ");

function recursiveBinarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (val === arr[mid]) {
    return mid;
  } else if (val < arr[mid]) {
    return recursiveBinarySearch(arr, val, start, mid - 1);
  } else {
    return recursiveBinarySearch(arr, val, mid + 1, end);
  }
}

// let sampleArr = [2, 4, 6, 8, 9];

console.log(recursiveBinarySearch(sampleArr, 99));

function stringSearch(str1, str2) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] !== str1[i + j]) break;
      if (j === str2.length - 1) count++;
    }
  }
  return count;
}
console.log(stringSearch("Samuel", "Sam"));

// stringSearch("Samuel", "Sam");

//
// Write a recursive program to determine if a string s of numbers has more even digits than odd digits.
// For example, given the input “0987650”, the number of even digits is 4, the number of odd digits is 3.
// Hence, your program will return that for this input, there are more even digits than odd digits.
// Note that zero is considered an

console.log("-------------- CountEvenOdd --------------- ");

// function countEvenOdd(n) {
//   let even_count = 0;
//   let odd_count = 0;
//   for (let i of n) {
//     if (i % 2 === 0) {
//       even_count++;
//     } else if (i % 2 !== 0) {
//       odd_count++;
//     }
//   }
//   if (even_count > odd_count) {
//     return `There are more even digits (${even_count}) than odd digits (${odd_count}).`;
//   } else {
//     return `There are more odd digits (${odd_count}) than even digits (${even_count}).`;
//   }
// }

// console.log(countEvenOdd("0987650"));
// countEvenOdd("0987650");

function countEvenOddRecursive(str) {
  let odd = 0;
  let even = 0;

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 === 0) {
      even++;
    } else if (helperInput[0] % 2 !== 0) {
      odd++;
    }

    helper(helperInput.slice(1));
  }

  helper(str);

  if (even > odd) {
    return `There are more even digits (${even}) than odd digits (${odd}).`;
  } else {
    return `There are more odd digits (${odd}) than even digits (${even}).`;
  }
}

// countEvenOddRecursive("0987650");

console.log(countEvenOddRecursive("0987650"));

// In Projects class, there are 8 boys and 12 girls. Samiratu is one of these girls.
// The facilitator needs to choose 1 boy and 1 girl to present. What is the probability Samiratu is one
// of those chosen to present? If the answer is a/b in simplest form, what is a+b?

// boys = 8, girls = 12
// total number of students in project class = 8 + 12 = 20
// probability of choosing samiratu = 12 / 20 = 3 / 5 in its simplest form.
// Therefore, a = 3, b = 5.
// a + b = 8

console.log(
  "------------------------- ARRAY METHODS -------------------------------------"
);

// JS HIGH ORDER FUNCTIONS AND ARRAY METHODS

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let canDrink = ages.filter((age) => age >= 21);

const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retailCompanies);

console.log("---------------- Eighties ---------------");

const lastedTenYears = companies.filter((yrs) => yrs.end - yrs.start >= 10);
console.log(lastedTenYears);

// const eighties = companies.filter(
//   (yrs) => yrs.start >= 1980 && yrs.start < 1990
// );
// console.log(eighties);

const squaredAges = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
console.log(squaredAges);

console.log("------------------- SORT -----------------------");

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);

const sortAge = ages.sort((a, b) => a - b);
console.log(sortAge);

//  Reduce

console.log("-------------------- Reduce ----------------------- ");

const sumAge = ages.reduce((total, age) => total + age, 0);
console.log(sumAge);

const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

console.log(totalYears);

console.log("---------------------- COMBINED ------------------------");

// Combined Method Calls

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
