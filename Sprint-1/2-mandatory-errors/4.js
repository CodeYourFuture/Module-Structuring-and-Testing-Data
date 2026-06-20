const 12HourClockTime = "8:53pm";
const 24hourClockTime = "20:53";

//SyntaxError: Invalid or unexpected token is shown. So I googled and found there are a lot of different cases would trigger this error. I initially thought thar the " " maybe wrongly use as some cases smart quote can confuse developer. I simply replace that with straight quote but the same error shown.
//Then I tried to comment the first line and saw the same error shown for the second line. There are a double arrow under 12 or 24 in the variable name.
//So I googled and found the error is due to variable name started with number is not allowed and will trigger error. So I solved the error by removing the number from both variable names.