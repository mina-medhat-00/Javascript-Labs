// Function accept a full name string and convert each letter of
// first world to Capital and the remaining to small (Pascal Case).
// Example : 'the quick brown fox'
// Output : 'The Quick Brown Fox'
const pascalCase = (str) => {
  const words = str
    .split(" ")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join(" ");
  return words;
};

// Function that accept a sentence and return the longest word within the input
// Example : 'Web Development Tutorial'
// Output : 'Development'
const findLongestWord = (str) => {
  let longestWord = "";
  const words = str.split(" ");
  for (let i in words) {
    if (longestWord.length < words[i].length) longestWord = words[i];
  }
  return longestWord;
};

// Write a JavaScript Function that returns a passed string with letters in alphabetical order
// Example : javascript
// Output : aacijprstv
const sortAlphabet = (str) => {
  return str.split("").sort().join("");
};

// Write a function that takes two arrays and returns an array of common
// elements using filter() or a loop.
// Example: const arr1 = [1, 2, 3]; const arr2 = [2, 3, 4]; Returns [2, 3].
const commonElements = (arr1, arr2) => {
  return arr1.filter((num) => arr2.includes(num));
};

// Make Array of duplicates numbers and remove it in new array
const arr1 = [1, 2, 2, 2, 3, 3, 3];
const set = new Set(arr1);
const arr2 = [...set];
