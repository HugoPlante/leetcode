function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const smallerStr = str1.length < str2.length ? str1 : str2;
  let gcdStr = "";

  for (let i = 1; i <= smallerStr.length; i++) {
    const subStr = smallerStr.substring(0, i);
    if (
      str1.length % subStr.length === 0 &&
      str2.length % subStr.length === 0
    ) {
      const repeatStr1 = subStr.repeat(str1.length / subStr.length);
      const repeatStr2 = subStr.repeat(str2.length / subStr.length);
      if (repeatStr1 === str1 && repeatStr2 === str2) {
        gcdStr = subStr;
      }
    }
  }

  return gcdStr;
}

console.log(gcdOfStrings("ABCABC", "ABC"));
