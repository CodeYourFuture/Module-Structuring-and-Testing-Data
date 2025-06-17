// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.


/*---------------------- Test cases should:--------------------------------
Handle a range of valid times:
    -> Leading zero hours (e.g. "03:00", "08:00")
    -> Non-zero minutes (e.g. "07:05", "13:08", "23:59", "15:30")
Correctly convert and label AM/PM:
    -> Boundaries like "11:59", "12:00", "12:01", "00:00", "00:01"
Handle invalid inputs:
    -> Bad format ("five", " :20"), out-of-range values ("15:60", "24:00")
--------------------------------------------------------------------------*/

function formatAs12HourClock(time) {
    if (!/^\d{2}:\d{2}$/.test(time)) return "Invalid format"; // Check if input matches the "HH:MM" format
    
    const [hourStr, minuteStr] = time.split(":"); // Split the time string into hour and minute parts 
    const [hours, minutes] = [Number(hourStr), Number(minuteStr)]; // Convert hour and minute strings to numbers
    
    if (isNaN(hours) || hours < 0 || hours > 23) return "Invalid hour"; // Validate hours (must be between 0 and 23)
    if (isNaN(minutes) || minutes < 0 || minutes > 59) return "Invalid minutes"; // Validate minutes (must be between 0 and 59) 

    const isPM = hours >= 12; // Check if it's PM (12 or later)
    let hour12 = hours % 12; // Convert hours to 12-hour format (0 and 12 become 12)
    if (hour12 === 0) hour12 = 12; // Ensure 12-hour clock always shows "12" instead of "0"

    const minutePadded = String(minutes).padStart(2, "0"); // Ensure minutes are always two digits ("05" instead of "5")

    return `${hour12}:${minutePadded} ${isPM ? "pm" : "am"}`; // Return the formatted string with correct hour, minutes, and am/pm
}

// List of test inputs with expected outputs to verify the function works correctly
const testInputs = [
  { currentOutput: "08:00", targetOutput: "8:00 am" },      
  { currentOutput: "21:17", targetOutput: "9:17 pm" },      
  { currentOutput: "07:05", targetOutput: "7:05 am" }, 
  { currentOutput: "13:08", targetOutput: "1:08 pm" }, 
  { currentOutput: "00:01", targetOutput: "12:01 am" }, 
  { currentOutput: "11:59", targetOutput: "11:59 am" },      
  { currentOutput: "00:00", targetOutput: "12:00 am" },     
  { currentOutput: "23:59", targetOutput: "11:59 pm" },     
  { currentOutput: "12:01", targetOutput: "12:01 pm" },      
  { currentOutput: "12:00", targetOutput: "12:00 pm" },      
  { currentOutput: "15:60", targetOutput: "Invalid minutes" }, 
  { currentOutput: "24:00", targetOutput: "Invalid hour" }, 
  { currentOutput: "seven twenty", targetOutput: "Invalid format" },  
  { currentOutput: " :20", targetOutput: "Invalid format" },  
  { currentOutput: "03:3", targetOutput: "Invalid format" }, 
  { currentOutput: "9:00", targetOutput: "Invalid format" },
   
];

/* Loop through each item in 'testInputs' array using 'forEach' method and extract the values for each test case 
 by destructuring, to check if the output matches the expected result. The index gives the position number of each test in the list. */
testInputs.forEach(({ currentOutput, targetOutput }, index) => { 
  const actual = formatAs12HourClock(currentOutput); // calls 'formatAs12HourClock' function, using 'currentOutput' value, and stores the result in a new variable called actual.
  console.assert(
    actual === targetOutput, // 'actual' saves the output to compare it with the expected result 'targetOutput'.
    `Test ${index + 1} current output = ${currentOutput}, target output = ${targetOutput}, got = ${actual}`
  );
});