let teamA = [3, 5, 2];
let teamB = [2, 6, 1];

function compareArrays(teamA, teamB) {
  let pointsA = 0;
  let pointsB = 0;

  for (let i = 0; i < teamA.length; i++) {
    if (teamA[i] > teamB[i]) {
      pointsA++;
    } else if (teamA[i] < teamB[i]) {
      pointsB++;
    }
  }

  return [pointsA,pointsB];
}

let gameResults = compareArrays(teamA, teamB);

console.log(gameResults);
