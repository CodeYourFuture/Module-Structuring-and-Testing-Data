const HourClockTime = "20:53";
const hourClockTime = "08:53";


/* 1. The first error has to do with naming variables. It is not allowed to have a variable with a name that starts with a digit.
   2. The second error is that a const variable doesn't change and time changes every second, so it's best we declare the hour variable with let.
   3. The last error is due to the fact that JavaScript is case-sensitive. We have to notice how we name our variables. In this case the variable "HourClockTime" differs from the second variable "hourClockTime" and that will cause an error / bug. It is also best practice to use camel casing when naming variables with more than two names and preferably start with a lower case character */