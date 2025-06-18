function repeat(string,repetitions) {

    if (repetitions<0){throw new Error("you cannot enter a negative number of repetitions")};

    repeatsInArray = Array.from({length:repetitions}, (_,i) => string);
    return repeatsInArray.join("");
}

// manyHellos = repeat("hello",5);
// console.log(manyHellos);

module.exports = repeat;