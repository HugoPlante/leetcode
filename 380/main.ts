class RandomizedSet {
    // Using an array to store the values allows us to get a random value in O(1) time AND insert/remove in O(1).
    private set: Set<number>;
    private array: number[];

    constructor() {
        this.set = new Set();
        this.array = [];
    }

    insert(val: number): boolean {
        if (this.set.has(val)) {
            return false;
        }
        this.set.add(val);
        this.array.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.set.has(val)) {
            return false;
        }
        this.set.delete(val);
        const index = this.array.indexOf(val);
        [this.array[index], this.array[this.array.length - 1]] = [this.array[this.array.length - 1], this.array[index]];
        this.array.pop();
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.array.length);
        return this.array[randomIndex];
    }
}