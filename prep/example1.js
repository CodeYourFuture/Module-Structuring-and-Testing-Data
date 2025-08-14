
// This function capitalises the first letter of a name and returns a greeting message.
// It uses string manipulation to achieve this. 

function capitaliseFirstLetter(name) {
  return (name[0].toUpperCase() + name.substring(1));
}

function createGreeting(name) {
  const result = capitaliseFirstLetter(name);
  return `Welcome ${result}`;
}

const greeting = createGreeting("barath");
console.log(greeting);