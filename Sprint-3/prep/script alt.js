const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;
console.log(textarea.maxLength);

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;



textarea.addEventListener("keyup", 
() => const remainingCharacters = textarea.maxLength - textarea.value.length;
  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
  console.log(remainingCharacters);
);
