// Part 2 of the while loop is a do-while loop

// Stuck on this part:
/*
Researchers have discovered that every 4 weeks a disease is killing 40% of the insect population after the
population has reproduced. If 2 insects exist on the first week, how many weeks will pass until the insect population
exceeds 10,000 insects? Write a second do-while loop that outputs the insect population each week until the population
exceeds 10,000 insects. Decimal places will appear in the number of insects after removing 40% of the population on week 4.
*/
// Maybe something using modulus/remainder?
//  something like? ...
// v1
let insects = 2;
let week = 1;
do {
   console.log("Week#" + week + ": " + insects);
   insects = insects *= 2;
   week++;
   do {
      insects = insects - (0.4 * insects);
   } while (week % 4 == 0);
} while (insects <= 10000);

// idea - create a remainder variable
let remainder = week % 4;
while (remainder == 0);

// v2
let insects = 2;
let week = 1;
let remainder = week % 4;
do {
   console.log("Week#" + week + ": " + insects);
   insects = insects *= 2;
   week++;
   do {
      insects = insects - (0.4 * insects);
   } while (remainder == 0);
} while (insects <= 10000);
