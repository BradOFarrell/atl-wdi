// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
const sumOfNums = function(numsArray){
  return numsArray.reduce((sum, value) => {
    return sum + value;
  }, 0);
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function(numsArray){
  return numsArray.filter(function(v){
    return v > 10;
  });  
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
const allGreaterThanTen = function(numsArray){
  let output = true;
  numsArray.forEach( v => {
    if (v <= 10){
      output = false;
    }
  });
  return output;
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
const wordsWithAtLeastFiveLetters = function(words){
  return words.filter(function(v){
    return v.length >= 5;
  });  
};

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
const allStartingWithA = function(words){
  let output = words.filter(function(v){
    return v.toString().charAt(0).toUpperCase() == "A";
  });
  if(output == []){
    return false
  };
  return output;
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
const anyStartingWithB = function(words){
  let output = words.filter(function(v){
    return v.toString().charAt(0).toUpperCase() == "B";
  });
  if(output == []){
    return false;
  } else {
    return true;
  }
};

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
const hasAtLeastNVowels = function(word, n){
  let count = 0;  
  if (n < 0) {
    return null;
  }
  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i).toUpperCase() === 'A'
     || word.charAt(i).toUpperCase() === 'E'
     || word.charAt(i).toUpperCase() === 'I'
     || word.charAt(i).toUpperCase() === 'O'
     || word.charAt(i).toUpperCase() === 'U') {
      count++;
    }
  }
  return count >= n
};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
const wordsWithAtLeastTwoVowels = function(words){
  let output = words.filter(function(v){
    return hasAtLeastNVowels(v, 2);
  });
  return output;
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  let output = words.filter(function(v){
    return hasAtLeastNVowels(v, 2);
  });
  if (words == []) {
    return true;
  }
  if(output == words){
    return false;
  } else {
    return true;
  }
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  let output = words.filter(function(v){
       return hasAtLeastNVowels(v, 2);
   });
   if(output.length != 0){
     return false;
   } else {
     return true;
   }
  };

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
const noneHaveTwoOrMoreVowels = function(words){
  return !anyHaveAtLeastTwoVowels(words);
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
const buildObjectFromWords = function(words){
  let output = {};
  for (let i = 0; i < words.length; i++) {
    output[words[i]] = words[i].length;
  }
  return output;
};

console.log(sumOfNums([0, 2, 3, 4, 6, 10, 11]));
console.log(numsGreaterThanTen([0, 2, 3, 4, 6, 10, 11, 15, 13]));
console.log(allGreaterThanTen([0, 2, 3, 4, 6, 10, 11, 15, 13]));
console.log(allGreaterThanTen([11, 15, 13]));
console.log(wordsWithAtLeastFiveLetters(["Apple", "Banana", "Orange"]));
console.log(allStartingWithA(["Apple", "Banana", "Orange"]));
console.log(anyStartingWithB(["Apple", "Banana", "Orange"]));
console.log(hasAtLeastNVowels("Banana", 3));
console.log(hasAtLeastNVowels("Banana", 4));
console.log(wordsWithAtLeastTwoVowels(["Apple", "Banana", "Orange", "Plumb"]));
console.log(wordsWithAtLeastTwoVowels(["Apple", "Banana", "Orange", "Plumb"]));
console.log(anyHaveAtLeastTwoVowels(["Apple", "Banana", "Orange", "Plumb"]));
console.log(anyHaveAtLeastTwoVowels(["Plumb", "Cherry"]));
console.log(noneHaveTwoOrMoreVowels(["Apple", "Banana", "Orange", "Plumb"]));
console.log(noneHaveTwoOrMoreVowels(["Plumb", "Cherry"]));
console.log(buildObjectFromWords(["Apple", "Banana", "Orange", "Plumb"]));


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}