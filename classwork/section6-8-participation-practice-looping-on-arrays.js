// Example for loop on an array
// for looping an array gives more control on the starting and ending positions
/*
for (i = 0; i < groceries.length; i++) {
   console.log(i + " - " + groceries[i]);
}
*/
/*
Duke and North Carolina have a famous basketball rivalry dating back to 1920.
The number of points each team has scored in head-to-head competition over five years is provided in the dukeScores and ncScores arrays.
Ex: North Carolina won the first game 76-72 since dukeScores[0] is 72 and ncScores[0] is 76.
*/
/*
Write a for loop that examines the dukeScores and ncScores arrays and places "D" in the winningTeam array if Duke won or "N" if North Carolina won,
for every game. Ex: winningTeam[0] should be "N" because North Carolina won 76-72, and winningTeam[1] should be "D" because Duke won 74-73.
*/
/*
Then display the contents of the winningTeam array using a for-of or forEach() loop.
*/
// Starting code:
let dukeScores  = [72, 74, 84, 92, 93, 66, 69, 73, 70, 85, 75, 67, 79];
let ncScores    = [76, 73, 77, 90, 81, 74, 53, 68, 88, 84, 58, 81, 73];
let winningTeam = [];

// Who won the first game?
if (dukeScores[0] > ncScores[0]) {
   console.log("Duke won " + dukeScores[0] + "-" + ncScores[0] + ".");
}
else {
   console.log("North Carolina won " + ncScores[0] + "-" + dukeScores[0] + ".");
}

// How to loop over and compare the dukeScores and ncScores arrays?
for (i = 0; i < dukeScores.length; i++) {
  if (dukeScores[i] > ncScores[i]) {
    winningTeam[] += winningTeam.push("D");
    return winningTeam[];
  }
  else {
    winningTeam[] += winningTeam.push("N");
    return winningTeam[];
  }
}

// for-of loop to display each winner in the winningTeam array
for (let winner of winningTeam) {
  console.log(winner);
}
