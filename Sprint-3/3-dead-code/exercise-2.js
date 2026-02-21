// Remove the unused code that does not contribute to the final console log
// The countAndCapitalisePets function should continue to work for any reasonable input it's given, and you shouldn't modify the pets variable.

const pets = ["parrot", "hamster", "horse", "dog", "hamster", "cat", "hamster"];

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

const countedPets = countAndCapitalisePets(pets);

console.log(countedPets); // { 'PARROT': 1, 'HAMSTER': 3, 'HORSE': 1, 'DOG': 1, 'CAT': 1 }
