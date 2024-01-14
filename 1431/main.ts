function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxBeforeExtra = 0;

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > maxBeforeExtra) {
      maxBeforeExtra = candies[i];
    }
  }

  return candies.map((candy) => candy + extraCandies >= maxBeforeExtra);
}

function kidsWithCandies2(candies: number[], extraCandies: number): boolean[] {
  const maxCandy = Math.max(...candies);
  const maxAfterExtra = maxCandy - extraCandies;

  return candies.map((candy) => candy >= maxAfterExtra);
}
