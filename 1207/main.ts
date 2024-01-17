/*
    The idea is to use a map to store the occurences of each number in the array.
    Then convert the map to a set and compare the size of the map and the set.
    If they are equal, then all the occurences are unique.
*/ 


function uniqueOccurrences(arr: number[]): boolean {
    let occurences = new Map<number, number>();

    for (const num of arr) {
        if (occurences.has(num)) {
            occurences.set(num, occurences.get(num)! + 1);
        } else {
            occurences.set(num, 1);
        }
    }

    let uniqueOccurences = new Set<number>();

    for (const [_, occurence] of occurences) {
        if (uniqueOccurences.has(occurence)) {
            return false;
        } else {
            uniqueOccurences.add(occurence);
        }
    }

    return occurences.keys.length === uniqueOccurences.keys.length;
};