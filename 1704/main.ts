function halvesAreAlike(s: string): boolean {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  const firstHalf = s.substring(0, s.length / 2);
  const firstHalfVowels = firstHalf
    .split("")
    .filter((char) => vowels.includes(char));

  const secondHalf = s.substring(s.length / 2);
  const secondHalfVowels = secondHalf
    .split("")
    .filter((char) => vowels.includes(char));

  return firstHalfVowels.length == secondHalfVowels.length;
}