
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> My prediction is that error occurs because function trying to use a number as a function.

function square(3) {
    return num * num;
}

// =============> Expected identifier but found "3"

// =============> While program waiting for an identifier, it found a number instead.

// Finally, correct the code to fix the problem

// =============> 
    function square(num) {
        return num * num;
    }

    // to call the function
    console.log(square(9)); // Output: 81


