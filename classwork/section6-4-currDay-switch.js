
// Get a number between 0 and 6 representing the day of the week (0 = Sunday, 6 = Saturday)
// To test: change the case number to correspond with the current day of the week currDay
//  Ex.: if today is Tuesday, change case number to 2 on any case to check the case logic.
let currDay = new Date().getDay();
switch (currDay) {
// Convert into an equivalent switch statement
case  1:
   console.log("I love Mondays!");
   break;
case 2:
case 3:
case 4:
   console.log("Working hard!");
   break;
case 5:
   console.log("TGIF!");
   break;
default:
   console.log("Time to relax!");

}
