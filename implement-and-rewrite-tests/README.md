# Implement solutions and rewrite tests with Jest

Before writing any code, please read the [Testing Function Guide](testing-guide.md) to learn how
to choose test values that thoroughly test a function.

## 1 Implement solutions

In the `implement` directory you've got a number of functions you'll need to implement.
For each function, you also have a number of different cases you'll need to check for your function.

Write your implementation and your tests to cover the cases the function should fulfil. Write tests in the relevant files in the `implement-tests-with-node-test` directory.

Here is a recommended order:

1. `1-get-angle-type.js`
2. `2-is-proper-fraction.js`
3. `3-get-card-value.js`

## 2 Rewrite tests with Jest

Jest is a whole library of helper functions we can use to make our assertions more readable and easier to write.

Your new task is to write the same tests as you wrote in the `implement-tests-with-node-test` directory, but using Jest instead of `node:test`.

You shouldn't have to change the contents of `implement` to write these tests.

There are files for your Jest tests in the `rewrite-tests-with-jest` directory. They will automatically use the functions you already implemented.

There are few ways you can run these tests:
* For `node:test` tests, you can run them in the terminal with `node path/to/file`.
* To run all of the tests in this repo, you can run `npm test`.
* To run just one directory or file of tests, you can run `npm test implement-and-rewrite-tests/rewrite-tests-with-jest` or `implement-and-rewrite-tests/rewrite-tests-with-jest/1-get-angle-type.test.js`.
* VSCode has a built-in test runner that you can use to run the tests, and this should make it much easier to focus on building up your test cases one at a time.

https://code.visualstudio.com/docs/editor/testing

1. Go to rewrite-tests-with-jest/1-get-angle-type.test.js
2. Click the green play button to run the test. It's on the left of the test function in the gutter.
3. Read the output in the TEST_RESULTS tab at the bottom of the screen.
4. Explore all the tests in this repo by opening the TEST EXPLORER tab. The logo is a beaker.

![VSCode Test Runner](../../run-this-test.png)

![Test Results](../../test-results-output.png)
