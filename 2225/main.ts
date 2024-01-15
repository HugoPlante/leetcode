function findWinners(matches: number[][]): number[][] {
  const noLostGames = new Set<number>();
  const lostOneGame = new Set<number>();
  const moreThanOneLostGame = new Set<number>();

  for (const [winner, loser] of matches) {
    if (!lostOneGame.has(winner) && !moreThanOneLostGame.has(winner)) {
      noLostGames.add(winner);
    }
    if (lostOneGame.has(loser)) {
      lostOneGame.delete(loser);
      moreThanOneLostGame.add(loser);
    }
    if (noLostGames.has(loser)) {
      noLostGames.delete(loser);
      lostOneGame.add(loser);
    }

    if (
      !lostOneGame.has(loser) &&
      !moreThanOneLostGame.has(loser) &&
      !noLostGames.has(loser)
    ) {
      lostOneGame.add(loser);
    }
  }
  return [
    Array.from(noLostGames).sort((a, b) => a - b),
    Array.from(lostOneGame).sort((a, b) => a - b),
  ];
}

function findWinners2(matches: number[][]): number[][] {
  const lossCount = new Map<number, number>();

  for (const [winner, loser] of matches) {
    if (!lossCount.has(winner)) {
      lossCount.set(winner, 0);
    }
    lossCount.set(loser, (lossCount.get(loser) || 0) + 1);
  }

  const noLostGames = [0];
  const lostOneGame = [0];

  for (const [player, losses] of lossCount) {
    if (losses === 0) noLostGames.push(player);
    else if (losses === 1) lostOneGame.push(player);
  }

  return [noLostGames.sort((a, b) => a - b), lostOneGame.sort((a, b) => a - b)];
}
