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

const прикладСтрічки = "Грає жвавий пес на цьому березі річки";
console.log(isPangram(прикладСтрічки)); // Вивід: false
