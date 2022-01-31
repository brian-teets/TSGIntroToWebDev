/*
A given insect population doubles every week. If 2 insects exist on the first week, how many weeks will pass until the insect population exceeds 10,000 insects?
Use a while loop to output the insect population each week until the population exceeds 10,000 insects.
*/
let insects = 2;
let week = 1;
while (insects <= 10000) {
   console.log("Week#" + week + ": " + insects);
   insects = insects *= 2;
   week = week +=1;
}
// which outputs:
/*
Week #1: 2
Week #2: 4
Week #3: 8
Week #4: 16
Week #5: 32
Week #6: 64
Week #7: 128
Week #8: 256
Week #9: 512
Week #10: 1024
Week #11: 2048
Week #12: 4096
Week #13: 8192
*/
// SAME, but written as a do-while:
let insects = 2;
let week = 1;
do {
   console.log("Week#" + week + ": " + insects);
   insects = insects *= 2;
   week++;
} while (insects <= 10000);
