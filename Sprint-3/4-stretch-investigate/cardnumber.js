function cardGenerator() {
    let cardNumber = "";
    
    for (let i = 0; i < 16; i++) {
        cardNumber += Math.floor(Math.random() * 10); // Генерируем случайное число от 0 до 9
    }

    return cardNumber;
}

function cardValidator (card_number) {
    if (card_number.length === 16) {
        return true;
    } else {
        return false;
    }
}

const generatedCard = cardGenerator();
cardValidator(generatedCard)
console.log (generatedCard)

console.log (cardValidator(generatedCard))

