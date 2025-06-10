

function capitaliseFirstLetter(name) {
  return name[0].toUpperCase() + name.substring(1);
}

function createGreeting(name) {
  const result = capitaliseFirstLetter(name);
  return `Welcome ${result}`;
}

const greeting = createGreeting("barath");
console.log(greeting);