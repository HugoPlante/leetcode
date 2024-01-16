function reverseVowels(s: string): string {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const sArr = s.split("");

    let rightPointer = sArr.length - 1;

    for (let leftPointer = 0; leftPointer < sArr.length; leftPointer++) {
        if (vowels.includes(sArr[leftPointer])) {
            while (!vowels.includes(sArr[rightPointer])) {
                rightPointer--;
            }

            if (leftPointer >= rightPointer) break;
            [sArr[leftPointer], sArr[rightPointer]] = [
                sArr[rightPointer],
                sArr[leftPointer],
            ];
            rightPointer--;
        }
    }

    return sArr.join("");
}
