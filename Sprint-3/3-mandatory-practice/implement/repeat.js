function repeat(ourSingleString, repeatCount) {
    if (repeatCount < 0) {
        return ("How can we repeat a string negative times? We can't do that. Please enter a positive number.");
    }
    else if (repeatCount === 0) {
        return ("");

    }

    //String validation
    else if (ourSingleString !== "string") {
        return ourSingleString.toString().repeat(repeatCount);
    }

    //repeat the str count times and return a new string containing the repeated str values.
    for (let i = 0; i < repeatCount; i++) {
       return ourSingleString.repeat(repeatCount);
    }

}

module.exports = repeat;