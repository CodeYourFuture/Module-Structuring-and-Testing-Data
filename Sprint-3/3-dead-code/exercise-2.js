// Remove the unused code that does not contribute to the final console log
// The countAndCapitalisePets function should continue to work for any reasonable input it's given, and you shouldn't modify the pets variable.

//let's start from top to bottom and logically think through each line

const pets = ["parrot", "hamster", "horse", "dog", "hamster", "cat", "hamster"];
//above line is needed because it is used by everything else. 

const capitalisedPets = pets.map((pet) => pet.toUpperCase());
// i am removing above line as "capitalisedPets" is not used anywhere else. 

const petsStartingWithH = pets.filter((pet) => pet[0] === "h");
//this line is filters the words starting with "h" and is used later so we keep it.

function logPets(petsArr) {
  petsArr.forEach((pet) => console.log(pet));
}
//i am erasing the above function as "logPets" is not used anywhere else. 

function countAndCapitalisePets(petsArr) {
  const petCount = {};
//keeping this function, as petCount is used below. 

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
//everything above is needed to count how many of each pets there are. 

const countedPetsStartingWithH = countAndCapitalisePets(petsStartingWithH);
//it is used for function call, so needed. 

console.log(countedPetsStartingWithH); // { 'HAMSTER': 3, 'HORSE': 1 } <- Final console log
//we wanna see the result of our machinations so we keep it. 

//THE FOLLOWING CODE IS THE CLEANED UP VERSION. 

const pets = ["parrot", "hamster", "horse", "dog", "hamster", "cat", "hamster"];

const petsStartingWithH = pets.filter((pet) => pet[0] === "h");

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

console.log(countedPetsStartingWithH);
