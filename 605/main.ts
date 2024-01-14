function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let validSpots = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const isPrevEmpty = i === 0 || flowerbed[i - 1] === 0;
      const isNextEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (isPrevEmpty && isNextEmpty) {
        flowerbed[i] = 1;
        validSpots++;
        i++;
        if (validSpots >= n) return true;
      }
    }
  }

  return validSpots >= n;
}
