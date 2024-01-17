function moveZeroes(nums: number[]): void {
    // quick sort

    for (let i = 0, j = 0; i < nums.length; i++, j++) {
        if (nums[i] === 0) {
            if (nums[i] === 0) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
            
        }



    }
};