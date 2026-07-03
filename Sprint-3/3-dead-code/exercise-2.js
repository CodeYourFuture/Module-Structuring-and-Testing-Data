// Remove the unused code that does not contribute to the final console log
// The countAndCapitalisePets function should continue to work for any reasonable input it's given, and you shouldn't modify the pets variable.

const pets = ["parrot", "hamster", "horse", "dog", "hamster", "cat", "hamster"];
// const capitalisedPets = pets.map((pet) => pet.toUpperCase());  -> this line is not necessary because the same functionality is implemented inside the function countAndCapitalisePets.
// Also, the variable capitalisedPets in not being used in the global scope
const petsStartingWithH = pets.filter((pet) => pet[0] === "h");

// function logPets(petsArr) {
//   petsArr.forEach((pet) => console.log(pet));
// }  -> This function is not being used/called anywhere in the program, it is redundant code and should be removed.

function countAndCapitalisePets(petsArr) {
  const petCount = {};

  petsArr.forEach((pet) => {
    const capitalisedPet = pet.toUpperCase();
    if (petCount[capitalisedPet]) {
      petCount[capitalisedPet] += 1;
    } else {
      petCount[capitalisedPet] = 1;
    }
  });
  return petCount;
}

const countedPetsStartingWithH = countAndCapitalisePets(petsStartingWithH);

console.log(countedPetsStartingWithH); // { 'HAMSTER': 3, 'HORSE': 1 } <- Final console log
