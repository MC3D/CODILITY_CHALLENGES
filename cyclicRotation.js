// N and K are integers within the range [0..100]
// each element of array A is an integer within the range [−1,000..1,000]
function solution(A, K) {
  if (A.length > 1) {
    for (let i = 0; i < K; i++) {
      A = [
        ...A.slice(-1),
        ...A.slice(0, -1)
      ];
    }
  }

  return A
};

let A = [
    3, 8, 9, 7, 6
  ],
  K = 3

// Javascript arrays are objects and you can't simply use the equality operator === to understand if the content of those objects is the same. The equality operator will only test if two object are actually exactly the same instance.
// Utilizing loadash libray to perform a deep comparison between two values to determine if they are equivalent.
console.assert(_.isEqual(solution(A, K), [9, 7, 6, 3, 8]), 'cyclic rotation incorrect');

// A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
// For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
// Write a function:
//
// function solution(A, K);
// that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
// For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].
//
// Assume that:
//
// N and K are integers within the range [0..100];
// each element of array A is an integer within the range [−1,000..1,000].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
//
// an integer is a number with no fractional part, includes counting numbers, 0, and negative counting numbers
