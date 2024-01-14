function mergeAlternately(word1, word2) {
  let merged = "";
  let w1Pointer = 0;
  let w2Pointer = 0;

  while (w1Pointer < word1.length || w2Pointer < word2.length) {
    if (w1Pointer < word1.length) {
      merged += word1[w1Pointer++];
    }
    if (w2Pointer < word2.length) {
      merged += word2[w2Pointer++];
    }
  }

  return merged;
}