function getCardValue(card) {
   

        let cards = card.slice(0,-1); // drop one last letter from string 
      
        const rank1= ["J","Q","K"];
        
        if (cards === "A")  // if the input is A return 11
          {
            return 11;
          }
        else if (card == "Ace")  // if the input is Ace return 11
            {
              return 11; 
            }
      
        else  if (cards.length ==1 && rank1.includes(cards) ) // input length is 1 and input is in rank 1 return 10;
        {
           return 10;
        }
      
        else if (cards === "10") // if input is 10 return 10;
          {
            return 10;
          }            
        
      
      else if (cards.length ==1 && rank1.includes(cards)=== false) // if input length is 1 & not include in rank1 
      {
        value = Number(cards);                       // convert the input into number and return the value
        return value;  
      }
        
      else if (cards.length ==2 && cards != "10") // if input length is 2 and not equal to 10 return invalid
      {
        return `The card is invalid`;
      }
      
        
          
      
      
}
module.exports = getCardValue;