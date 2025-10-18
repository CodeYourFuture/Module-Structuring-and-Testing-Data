//let count = 0;

//count = count + 1;

// Line 1 is a variable declaration, creating the count variable with an initial value of 0
// Describe what line 3 is doing, in particular focus on what = is doing
// Line 3  returns the incremented value of count. The operator = assigns count +1 to the varibale count in the
// left.   

// Described what line three is doing.

// Example from codewar (from programming workshop)

function drawStairs(n) {
	let result = "";
	if (n < 1) return result; // nothing to do

	let iCount = 0;
	while (iCount < n) {
		// add spaces before the I (for all lines after the first)
		let spaceCount = 0;
		while (spaceCount < iCount) {
			result = result.concat(" ");
			spaceCount = spaceCount + 1;
		}

		// add the "I"
		result = result.concat("I");

		// add a newline after each line except the last one
		if (iCount < n - 1) {
			result = result.concat("\n");
		}

		// update the count
		iCount = iCount + 1;
	}

	return result;
}

console.log(drawStairs(10));
