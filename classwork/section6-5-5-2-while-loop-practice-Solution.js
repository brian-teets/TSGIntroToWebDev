// Part 2 of the while loop is a do-while loop

/*
Researchers have discovered that every 4 weeks a disease is killing 40% of the insect population after the
population has reproduced. If 2 insects exist on the first week, how many weeks will pass until the insect population
exceeds 10,000 insects? Write a second do-while loop that outputs the insect population each week until the population
exceeds 10,000 insects. Decimal places will appear in the number of insects after removing 40% of the population on week 4.
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
