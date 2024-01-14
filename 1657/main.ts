function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;

  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    freq1[word1.charCodeAt(i) - "a".charCodeAt(0)]++;
    freq2[word2.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  for (let i = 0; i < 26; i++) {
    if ((freq1[i] === 0) !== (freq2[i] === 0)) return false;
  }

  const countFreq1 = new Array(word1.length + 1).fill(0);
  const countFreq2 = new Array(word2.length + 1).fill(0);

  for (let i = 0; i < 26; i++) {
    countFreq1[freq1[i]]++;
    countFreq2[freq2[i]]++;
  }

  for (let i = 0; i <= word1.length; i++) {
    if (countFreq1[i] !== countFreq2[i]) return false;
  }

  return true;
}
