function sortWords(words) {
return words.sort((wordA, wordB) => wordA < wordB ? -1 : 1);
}

function sortNumbers(numbers) {
return numbers.sort((num1, num2) => num1 < num2 ? -1 : 1);
}

function largestFirst(numbers) {
return numbers.sort((num1, num2) => num1 > num2 ? -1 : 1);
}

function sortFlowersByZone(flowers) {
return flowers.sort((flower1, flower2) => flower1.zone < flower2.zone ? -1 : 1);
}

function sortByLength(strings) {
return strings.sort((string1, string2) => string1.length < string2.length ? -1 : 1);
}

module.exports = {
  sortWords,
  sortNumbers,
  largestFirst,
  sortFlowersByZone,
  sortByLength,
};