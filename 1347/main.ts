function minSteps(s: string, t: string): number {
  let steps = 0;

  let sMap = new Map<string, number>();
  let tMap = new Map<string, number>();

  for (let j = 0; j < s.length; j++) {
    const sChar = s.charAt(j);
    const tChar = t.charAt(j);
    sMap.set(sChar, (sMap.get(sChar) || 0) + 1);
    tMap.set(tChar, (tMap.get(tChar) || 0) + 1);
  }

  for (let [key, value] of sMap) {
    if (tMap.get(key)) {
      if (tMap.get(key)! < value) {
        steps += value - tMap.get(key)!;
      }
    } else {
      steps += value;
    }
  }

  return steps;
}
