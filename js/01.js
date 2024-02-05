"use strict";
console.log(6);

/////////////////////01
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const lowercasedString = string.toLowerCase();

  const alphabetArray = Array(26).fill(false);

  for (let i = 0; i < lowercasedString.length; i++) {
    const charCode = lowercasedString.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      alphabetArray[charCode - 97] = true;
    }
  }

  return alphabetArray.every((occurred) => occurred);
}

// 2
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  const averageClassScore =
    classPoints.reduce((sum, score) => sum + score, 0) / classPoints.length;

  return yourPoints > averageClassScore;
}

// Приклад використання:
// const classPoints = [75, 80, 92, 88, 78];
// const yourPoints = 85;

// const result = betterThanAverage(classPoints, yourPoints);
// console.log(result);

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// function validatePIN(pin) {
//   if (pin.length === 4 || pin.length === 6) {
//     return /^\d+$/.test(pin); // Проверяем, состоит ли pin только из цифр
//   }
//   return false; // Возвращаем false для PIN с неправильной длиной
// }
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
function dnaStrand(dna) {
  let complementaryStrand = "";
  for (let base of dna) {
    switch (base) {
      case "A":
        complementaryStrand += "T";
        break;
      case "T":
        complementaryStrand += "A";
        break;
      case "C":
        complementaryStrand += "G";
        break;
      case "G":
        complementaryStrand += "C";
        break;
      default:
        // Handle any other characters if needed
        complementaryStrand += base;
    }
  }
  return complementaryStrand;
}

const Test = require("@codewars/test-compat");

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
