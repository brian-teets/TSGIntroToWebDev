// Convert into a drawBox function

for (let r = 0; r < 5; r++) {
   let line = "";
   for (let c = 0; c < 10; c++) {
      line += "?";
   }
   console.log(line);
}
// convert the for loop above to a function:
function drawBox (numRows, numCols, boxChar) {
   // Statements to execute when function is called
   for (let row = numRows; row > 0; row++) {
     let char = "X";
     for (let col = numCols; col > 0; col++) {
       char += boxChar;
     }
   }
 console.log(char);
}

drawBox();

// convert the for loop above to a function:
// Convert into a drawBox function
// boxChar = "X" sets a default parameter if an argument for boxChar is missing
function drawBox (numRows, numCols, boxChar = "X") {
   // Statements to execute when function is called
   for (let row = 0; row < numRows; row++) {
     let char = "";
     for (let col = 0; col < numCols; col++) {
       char += boxChar;
     }
     console.log(char);
   }
}

drawBox(7, 10);   // If I ran this now, it would print out 7 rows and 10 columns with character of X since an argument for boxChar was not passed in
