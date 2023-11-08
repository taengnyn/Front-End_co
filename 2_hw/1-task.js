
function formingHonor(arr, d) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {

      let currentSum = 0;

      for (let j = 0; j < d; j++) {
        currentSum += arr[(i + j * arr.length / d) % arr.length];
      }
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }

console.log(formingHonor([1, 2, 3, 4], 2));
console.log(formingHonor([1, 1, 0], 1));
