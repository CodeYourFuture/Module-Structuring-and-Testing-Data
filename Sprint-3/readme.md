# 🧭 Guide to week 3 exercises

> https://programming.codeyourfuture.io/structuring-data/sprints/3/prep/

> [!TIP]
> You should always do the prep work _before_ attempting the coursework.
> The prep shows you how to do the coursework.
> There is often a step by step video you can code along with too.
> Do the prep.

## 🔧 1 Implement

In the `implement` directory you've got a number of functions you'll need to implement.
For each function, you also have a number of different cases you'll need to check for your function.

Write your assertions and build up your program case by case. Don't rush to a solution. The point of these assignments is to learn how to write assertions and build up a program step by step.

Here is a recommended order:

1. `1-get-angle-type.js`
1. `2-is-proper-fraction.js`
1. `3-get-card-value.js`

## 🔧 2 Rewrite

`console.log` is most often used as a debugging tool. We use to inspect the state of our program during runtime. 

We can use `console.assert` to write assertions: however, it is not very easy to use when writing large test suites. In the first section, Implement, we used a custom "helper function" to make our assertions more readable.

Jest is a whole library of helper functions we can use to make our assertions more readable and easier to write.

Your new task is to _rewrite_ the assertions from `./1-key-implement` using Jest syntax.
Blank files have been created for you. Each script file has a paired `.test.js` file. Write your tests in the test file and the implementation in the script file.

You can run all the tests in this repo by running `npm test` in your terminal. However, VSCode has a built-in test runner that you can use to run the tests, and this should make it much easier to focus on building up your test cases one at a time.

https://code.visualstudio.com/docs/editor/testing

1. Go to 2-mandatory-rewrite/1-get-angle-type.test.js
1. Click the green play button to run the test. It's on the left of the test function in the gutter.
1. Read the output in the TEST_RESULTS tab at the bottom of the screen.
1. Explore all the tests in this repo by opening the TEST EXPLORER tab. The logo is a beaker.

![VSCode Test Runner](../run-this-test.png)

![Test Results](../test-results-output.png)

> [!TIP]
> You can always run a single test file by running `npm test path/to/test-file.test.js`.

## 3 Practice

In this section you'll practice this key skill of building up your program test first. 

Use the Jest syntax and complete the provided files, meeting the acceptance criteria for each function. Use the VSCode test runner to run your tests and check your progress.

Recommended order:

1. `count.test.js`
1. `repeat.test.js`
1. `get-ordinal-number.test.js`

## 🔍 4 Investigate Stretch

These stretch activities are not mandatory, but we hope you will explore them after you have completed the key and mandatory work.

In this exercise, you'll need to **play computer** with the function `find`. This function makes use of while loop statement. Your task will be to step through the code to figure out what is happening when the computer executes the code.

Next, try implementing the functions specified in `password-validator.js`.

Finally, set up your own script and test files for `card-validator.md`


