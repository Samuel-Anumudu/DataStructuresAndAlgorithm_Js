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
