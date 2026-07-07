# A Beginner's Guide to Testing Functions

## 1. What Is a Function?

```
Input  ──▶  Function  ──▶  Output
```

A function
- Takes **input** (via **arguments**)
- Does some work
- Produces **one output** (via a **return value**)
 
Example:

```
sum(2, 3) → 5
```

Important idea: the same input should produce the same output.


## 2. Testing Means Predicting

Testing means: 
> If I give this input, what output should I get?


## 3. Choosing Good Test Values

### Step 1: Determining the space of possible inputs
Ask:
- What type of value is expected? 
The exact data type the function requires to run cleanly (e.g., Number, String, Boolean, Array, or Object).

- What values make sense?
Inputs that are logically valid and physically possible based on the real-world problem you are solving.

  - If they are numbers:
    - Are they integers or floating-point numbers?
    Integers are for whole counts (e.g., count = 5); floating-point numbers are for precise measurements or money (e.g., price = 19.99).

    - What is their range?
    The minimum and maximum allowable numeric values constraints (e.g., a percentage must be between 0 and 100).

  - If they are strings:
    - What are their length and patterns?
    The specific structure strings must follow, such as character limits (e.g., 8-20 characters) or specific formats (e.g., an email pattern like name@domain.com).
- What values would not make sense?
Inputs that break reality or logic, such as a negative age (-5), an impossible date, or text strings passed to a multiplication function.

### Step 2: Choosing Good Test Values 

#### Normal Cases

These confirm that the function works in normal use.

- What does a typical, ordinary input look like?
A standard, error-free value safely in the middle of your expected range (e.g., using 25 for an adult age check).

- Are there multiple ordinary groups of inputs? e.g. for an age checking function, maybe there are "adults" and "children" as expected ordinary groups of inputs.
Yes; any time your code uses an if/else or switch statement to categorize data, each distinct category forms its own ordinary group.

  
#### Boundary Cases

Test values exactly at, just inside, and just outside defined ranges. 
These values are where logic breaks most often.

#### Consider All Outcomes

Every outcome must be reached by at least one test.

- How many different results can this function produce?
It produces exactly as many results as there are logical paths, code branches, or conditional statements (if, else if, else, catch).

- Have I tested a value that leads to each one?
You have only if your test cases intentionally execute every single code path at least once (known as 100% code coverage).

#### Crossing the Edges and Invalid Values

This tests how the function behaves when assumptions are violated.
- What happens when input is outside of the expected range?
The function should reject it by throwing an error or returning a safe default/fallback value (like null or false) instead of breaking.

- What happens when input is not of the expected type?
It risks triggering unexpected JavaScript behavior (like "5" + 5 = "55"). Good functions guard against this with explicit type checks (typeof).

- What happens when input is not in the expected format?
String parsers, data formatters, or regular expressions will fail to match, which should be caught cleanly without crashing the application.

## 4. How to Test

### 1. Using `console.assert()`

```javascript
  // Report a failure only when the first argument is false
  console.assert( sum(4, 6) === 10, "Expected 4 + 6 to equal 10" );
```

It is simpler than using `if-else` and requires no setup.
  
### 2. Jest Testing Framework

```javascript
  test("Should correctly return the sum of two positive numbers", () => {
    expect( sum(4, 6) ).toEqual(10);
    ... // Can test multiple samples 
  });

```

Jest supports many useful functions for testing but requires additional setup.
