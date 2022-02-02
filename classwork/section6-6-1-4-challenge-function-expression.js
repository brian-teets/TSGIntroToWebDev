/*
Assign a variable madLib to a function expression that has five parameters in the order: an adjective, an adverb, two nouns and a verb.
The function should return a mad lib string value by substituting the parameter values into the following template:
The [adjective] [noun1] [adverb] [verb] the [noun2]. For example: madLib("lazy", "quietly", "dog", "moon", "smashed")
returns "The lazy dog quietly smashed the moon.".
*/

let madLib = function(adjective, adverb, noun1, noun2, verb) {
  return "The " + adjective + " " + noun1 + " " + adverb + " " + verb + " the " + noun2 + ".";
};   // the order of the parameter values in the return statement only follows an order that makes sense in terms of English grammar

// print statement
console.log(madLib("lazy", "quietly", "dog", "moon", "smashed"))   // the console.log statement passes arguments in the same order as the parameters
