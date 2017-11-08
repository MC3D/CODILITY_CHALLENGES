// A has at least one integer
function solution(A) {
  let int = 1;

  if (Math.max(...A) < 1) {
    return 1;
  }

  // return positive values
  A = A.filter((a, index) => {
    return a > 0
  })

  // grab unique values and sort
  // the Set object lets you store unique values of any type, whether primitive values or object references
  A = [...new Set(A)].sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < A.length; i++) {
    if (A[i] === int) {
      int++
    } else {
      return int;
    }
  }
  return int;
}

console.assert(solution([-1, -3]) === 1, 'missing integer is incorrect');
console.assert(solution([1, 3, 6, 4, 1, 2]) === 5, 'missing integer is incorrect');
console.assert(solution([1, 2, 3]) === 4, 'missing integer is incorrect');

// This is a demo task.
//
// Write a function:
//
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Assume that:
//
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Complexity:
//
// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
// Elements of input arrays can be modified.
