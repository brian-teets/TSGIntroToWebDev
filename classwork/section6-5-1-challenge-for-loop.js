// for loop Challenge problem statement:
/*
Brooke is trying to save enough money in the next ten months to purchase a plane ticket to Australia.
Every month Brooke saves $100. Write a for loop that displays how much money Brooke will save at the end of each month for the next 10 months.
*/

let monthlyDeposit = 100; // Code will be tested with values: 100 and 130
let accountBalance = 0;
/* Your solution goes here */

for (i = 1; i < 11; i ++) {
  accountBalance = (accountBalance + monthlyDeposit)
  console.log (accountBalance);
}

 /* For the solution, I knew I needed to increment the month, but I wasn't sure how to do that plus increment the accountBalance.
 Eventually, I realized that I needed to calculate the accountBalance as an equation, which meant I could use i as an index to
 represent the months incrementing with a condition of 10 months - represented by i < 11. Once I realized I needed to figure out
 accountBalance as a simple equation, it was easy to do a simple for loop to increment the months. Then, I just had to realize that
 I needed to put the print statement after calculating the accountBalance so I'm not starting by printing a zero balance. 
 */
