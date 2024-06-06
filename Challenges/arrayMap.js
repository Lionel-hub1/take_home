function subarraySumExists(arr, target) {
    if (!arr.length) {
        return false;
    }

    let currentSum = arr[0];
    let start = 0;

    for (let end = 1; end < arr.length; end++) {
        while (currentSum > target && start < end - 1) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }

        currentSum += arr[end];
    }

    return currentSum === target;
}

// Testing if it works
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;

console.log(subarraySumExists(arr, target));
