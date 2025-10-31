const textarea = document.querySelector("textarea");

updateCharacterLimit();

function updateCharacterLimit() {
  const remainingCharacters = textarea.maxLength - textarea.value.length;
  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
  console.log(remainingCharacters);
}

textarea.addEventListener("keyup", updateCharacterLimit);
