


function square(3) {
    return num * num;
}


    It shows the syntax error which is an unexpected number;
    because we should not put 3 insides the variable, because it will lead to variable: num not defined
insides the function, so the 3 doesn't work insides the function.

We need to put num instead of 3 insides the();
That way when we call the function by using console.log.The 3 will go into the num variable.


function square(num) {
    return num * num;
}



