function climbStairs(n: number): number {
    if (n <= 2) return n;

    let prev = 1, B_prev = 2;
    let current = 0;

    for (let loop = 1; loop < n - 1; loop++) {
        current = prev + B_prev; // Calculate current steps
        prev = B_prev;
        B_prev = current;
    }

    return current;
};