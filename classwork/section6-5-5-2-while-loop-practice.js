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

//
let insects = 2;
let week = 1;
let remainder = week % 4;
do {
   console.log("Week#" + week + ": " + insects);
   if (remainder == 0){
      insects = insects - (0.4 * insects);
      insects *= 2;
      week++;
   }
   insects = insects *= 2;
   week++;
} while (insects <= 10000);
/*
From TA Quinten Lambert:
The remainder variable is never updated in the loop so the if condition will never be true. This means that none of that code is running.
you are doubling the population twice in this code, both inside of the do while. The first is immediately inside just after the console.log.
The second is inside of your if statement. You only need to do this once, specifically before attempting to reduce the population by 40% if the week
is divisible by 4.
As with population you are incrementing the week twice in this do while.
It should only be incremented once per iteration of the do while. I recommend incrementing the week variable once just before the end of
the iteration of the do while.
*/

// So, I tweaked it and came up with this, which I think works now:

let insects = 2;
let week = 1;
do {
   console.log("Week#" + week + ": " + insects);
   insects = insects *= 2;
   week++;
if (week % 4 == 0){
   insects = insects - (0.4 * insects);
   }
} while (insects <= 10000);
// outputs as:
/*
Week#1: 2
Week#2: 4
Week#3: 8
Week#4: 9.6
Week#5: 19.2
Week#6: 38.4
Week#7: 76.8
Week#8: 92.16
Week#9: 184.32
Week#10: 368.64
Week#11: 737.28
Week#12: 884.736
Week#13: 1769.472
Week#14: 3538.944
Week#15: 7077.888
Week#16: 8493.4656
*/
// HERE'S THE SOLUTION I CAME UP WITH AFTER HELP FROM QUINTEN - AND THIS SOLUTION WORKS AS EXPECTED
let insects = 2;
let week = 1;
do {
   console.log("Week#" + week + ": " + insects);
   insects = insects *= 2;
if (week % 4 == 0){
   insects = insects - (0.4 * insects);
   }
   week++;
} while (insects <= 10000);
// outputs as:
/*
Week#1: 2
Week#2: 4
Week#3: 8
Week#4: 16
Week#5: 19.2
Week#6: 38.4
Week#7: 76.8
Week#8: 153.6
Week#9: 184.32
Week#10: 368.64
Week#11: 737.28
Week#12: 1474.56
Week#13: 1769.472
Week#14: 3538.944
Week#15: 7077.888
*/
