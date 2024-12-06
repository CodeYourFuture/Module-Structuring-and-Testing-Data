// Original function to convert time to 12-hour format

 
function convertTo12HourFormat(time) {
    // Check if the input is a number
    if (typeof time === 'number') {
        let timeStr = time.toString().padStart(4, '0'); // Convert number to string and ensure it has at least 4 digits
        time = `${timeStr.slice(0, 2)}:${timeStr.slice(2)}`; // Convert to "hh:mm" format
    }

    let [hours, mins] = time.split(":");
    hours = parseInt(hours, 10); // Convert hours to an integer

    let period = 'am';
    if (hours === 0) {
        hours = 12; // 00:00 is midnight
    } else if (hours === 12) {
        period = 'pm'; // 12:00 is noon
    } else if (hours > 12) {
        hours -= 12; // Convert to 12-hour format
        period = 'pm';
    }

    mins = mins || "00"; // Default to "00" if minutes are missing
    return `${String(hours).padStart(2, "0")}:${mins} ${period}`;
}

// Test Case 1: Early morning
const result1 = convertTo12HourFormat("05:15");
const expected1 = "05:15 am";
console.assert(result1 === expected1, `Test 1 Failed: Got ${result1}`);

// Test Case 2: Late night (PM)
const result2 = convertTo12HourFormat("22:30");
const expected2 = "10:30 pm";
console.assert(result2 === expected2, `Test 2 Failed: Got ${result2}`);

// Test Case 3: Midnight (00:00)
const result3 = convertTo12HourFormat("00:00");
const expected3 = "12:00 am";
console.assert(result3 === expected3, `Test 3 Failed: Got ${result3}`);

// Test Case 4: Noon (12:00)
const result4 = convertTo12HourFormat("12:00");
const expected4 = "12:00 pm";
console.assert(result4 === expected4, `Test 4 Failed: Got ${result4}`);

// Test Case 5: Afternoon time
const result5 = convertTo12HourFormat("14:45");
const expected5 = "02:45 pm";
console.assert(result5 === expected5, `Test 5 Failed: Got ${result5}`);


// Test Case: Numeric input without ":" (1445 should be converted to "02:45 pm")
try {
    const resultNumeric = convertTo12HourFormat(1445); // Numeric input instead of a string
    const expectedNumeric = "02:45 pm";
    console.assert(resultNumeric === expectedNumeric, `Test Numeric Failed: Got ${resultNumeric}`);
} catch (error) {
    console.log("Test Numeric Failed: Function did not handle numeric input correctly");
}