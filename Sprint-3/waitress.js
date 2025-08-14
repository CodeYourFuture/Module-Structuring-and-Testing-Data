let hasWaitingCustomers = true;
let customerNumber = 1;

while (hasWaitingCustomers) {
  console.log(
    "Customer " + customerNumber + ", please choose a menu (1, 2, or 3)."
  );
  let order = Math.floor(Math.random() * 3) + 1;

  if (order == 1) {
    console.log(`Waitress : Menu 1 will be prepared in 10 minutes.`);
  } else if (order == 2) {
    console.log(`Waitress : Menu 2 will be prepared in 12 minutes.`);
  } else {
    console.log(`Waitress : Menu 3 will be prepared in 15 minutes.`);
  }
  //This part uses for ending loop.
  if (customerNumber == 5) {
    console.log(
      "All customers have given their orders. Waitress stops taking orders."
    );
    hasWaitingCustomers = false;
  }

  customerNumber++;
}