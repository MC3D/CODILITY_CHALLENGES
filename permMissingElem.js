function solution(A) {
  let len = A.length,
    missingElem = 0,
    diff;

  if (len === 0) {
    return 1;
  }

  // we can use sorting to solve it in lesser time complexity
  A.sort((a, b) => {
    return a - b;
  });

  // let max = A.length + 1;

  // for (let i = 1; i <= max; i++) {
  //   if (A.indexOf(i) === -1) {
  //     return i;
  //   }
  // }

  for (var N = 0; N < len; N++) {
    diff = A[N] - missingElem;
    if (diff > 1) {
      return missingElem + 1;
    } else if (diff === 1) {
      missingElem++;
    }
  }
  return missingElem + 1;
}

let elemArray = [2, 3, 1, 5];

console.assert(solution(elemArray) === 4, 'perm missing elem is incorrect');

// A zero-indexed array A consisting of N different integers is given.
// The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
//
// Your goal is to find that missing element.
//
// Write a function:
//
// function solution(A);
// that, given a zero-indexed array A, returns the value of the missing element.
//
// For example, given array A such that:
//
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.
//
// Assume that:
//
// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].
// Complexity:
//
// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
// Elements of input arrays can be modified.
