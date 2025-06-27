// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue
// the function takes a single parameter, a string representing a playing card
// the function should return the numerical value of the card
// the first test and first case is written for you
// complete the rest of the tests and cases
// write one test at a time, and make it pass, build your solution up methodically
// just make one change at a time -- don't rush -- programmers are deep and careful thinkers
function getCardValue(card) {
  let rank = card.slice(0, -1); // Get the rank part of the card (everything except the last character)
  if (rank === "A") return 11;
  if (rank === "K" || rank === "Q" || rank === "J" || rank === "10") return 10;
  if (rank >= "2" && rank <= "9") return parseInt(rank, 10);
  throw new Error("Invalid card rank.");
}

// You need to write assertions for your function to check it works in different cases
// we're going to use this helper function to make our assertions easier to read
// if the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value
const aceofSpades = getCardValue("A♠");
assertEquals(aceofSpades, 11);
// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).
const fiveofHearts = getCardValue("5♥");
// ====> write your test here, and then add a line to pass the test in the function above
assertEquals(fiveofHearts, 5);
// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js"
// /Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11
//     if (rank === "A") return 11;
//     ^

// ReferenceError: rank is not defined
//     at getCardValue (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11:5)
//     at Object.<anonymous> (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:28:21)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.16.0

// [Done] exited with code=1 in 0.052 seconds

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js"
// /Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11
//     if (rank === "A") return 11;
//     ^

// ReferenceError: rank is not defined
//     at getCardValue (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11:5)
//     at Object.<anonymous> (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:28:21)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.16.0

// [Done] exited with code=1 in 0.049 seconds

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js"
// /Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11
//     if (rank === "A") return 11;
//     ^

// ReferenceError: rank is not defined
//     at getCardValue (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11:5)
//     at Object.<anonymous> (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:28:21)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.16.0

// [Done] exited with code=1 in 0.053 seconds

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/tempCodeRunnerFile.js"
// /Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/tempCodeRunnerFile.js:1
//     if (rank === "A") return 11;
//     ^

// ReferenceError: rank is not defined
//     at Object.<anonymous> (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/tempCodeRunnerFile.js:1:5)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.16.0

// [Done] exited with code=1 in 0.051 seconds

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js"
// /Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11
//     if (rank === "A") return 11;
//     ^

// ReferenceError: rank is not defined
//     at getCardValue (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11:5)
//     at Object.<anonymous> (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:28:21)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.16.0

// [Done] exited with code=1 in 0.05 seconds

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js"
// /Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11
//     if (rank === "A") return 11;
//     ^

// ReferenceError: rank is not defined
//     at getCardValue (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11:5)
//     at Object.<anonymous> (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:28:21)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.16.0

// [Done] exited with code=1 in 0.052 seconds

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js"
// /Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11
//     if (rank === "A") return 11;
//     ^

// ReferenceError: rank is not defined
//     at getCardValue (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11:5)
//     at Object.<anonymous> (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:28:21)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.16.0

// [Done] exited with code=1 in 0.045 seconds

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js"
// /Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11
//     if (rank === "A") return 11;
//     ^

// ReferenceError: rank is not defined
//     at getCardValue (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:11:5)
//     at Object.<anonymous> (/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js:28:21)
//     at Module._compile (node:internal/modules/cjs/loader:1730:14)
//     at Object..js (node:internal/modules/cjs/loader:1895:10)
//     at Module.load (node:internal/modules/cjs/loader:1465:32)
//     at Function._load (node:internal/modules/cjs/loader:1282:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49

// Node.js v22.16.0

// [Done] exited with code=1 in 0.054 seconds

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js"

// [Done] exited with code=0 in 0.052 seconds

// [Running] node "/Users/seddiqazam/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-3/1-key-implement/3-get-card-value.js"

// [Done] exited with code=0 in 0.052 seconds
