function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false;
    let smallestNumber = Infinity;
    let secondSmallestNumber = Infinity;

    for (const num of nums) {
        if (num <= smallestNumber) {
            smallestNumber = num;
        }
        else if (num <= secondSmallestNumber) {
            secondSmallestNumber = num;
        } else {
            return true;
        }
    };
    return false;
};

console.assert(increasingTriplet([1, 2, 3, 4, 5]) === true, "1");
console.assert(increasingTriplet([5, 4, 3, 2, 1]) === false, "2");
console.assert(increasingTriplet([2, 1, 5, 0, 4, 6]) === true, "3");