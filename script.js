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
