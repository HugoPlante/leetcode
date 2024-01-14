function mergeAlternately(word1: string, word2: string): string {
  let merged = Array(word1.length + word2.length).fill("");

  let w1Pointer = 0;
  let w2Pointer = 0;

  for (let i = 0; i < merged.length; i++) {
    if (w1Pointer < word1.length) {
      merged[i] = word1[w1Pointer];
      w1Pointer++;
    }

    if (w2Pointer < word2.length) {
      merged[i] += word2[w2Pointer];
      w2Pointer++;
    }
  }

  return merged.join("");
}

function mergeAlternately2(word1, word2) {
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

function mergeAlternately3(word1, word2) {
  let merged = "";
  let i = 0;

  while (i < word1.length && i < word2.length) {
    merged += word1[i] + word2[i];
    i++;
  }

  if (i < word1.length) {
    merged += word1.slice(i);
  } else if (i < word2.length) {
    merged += word2.slice(i);
  }

  return merged;
}
