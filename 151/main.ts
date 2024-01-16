function reverseWords(s: string): string {
    let sArr = s.split(' ');
    
    sArr = sArr.filter((word) => word !== '');
    
    return sArr.reverse().join(' ').trim();
};

console.log(reverseWords("a good   example"));