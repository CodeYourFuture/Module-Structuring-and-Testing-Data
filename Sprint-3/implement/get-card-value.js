public class CardValue {

    // Function to get the card value based on blackjack rules
    public static int getCardValue(String card) {
        String rank = card.substring(0, card.length() - 1);

        switch (rank) {
            case "A":
                return 11; 
            case "K":
            case "Q":
            case "J":
            case "10":
                return 10; 
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return Integer.parseInt(rank); 
            default:
                throw new IllegalArgumentException("Invalid card rank");
        }
    }

    public static void main(String[] args) {
        // Test cases for different scenarios
        assert getCardValue("A♠") == 11 : "Ace should be worth 11 points";
        assert getCardValue("K♣") == 10 : "King should be worth 10 points";
        assert getCardValue("Q♦") == 10 : "Queen should be worth 10 points";
        assert getCardValue("J♥") == 10 : "Jack should be worth 10 points";
        assert getCardValue("10♠") == 10 : "10 should be worth 10 points";
        assert getCardValue("9♣") == 9 : "9 should be worth 9 points";
        assert getCardValue("5♦") == 5 : "5 should be worth 5 points";

        // Testing invalid card rank
        try {
            getCardValue("1♠");
            assert false : "Expected IllegalArgumentException for invalid rank '1'";
        } catch (IllegalArgumentException e) {
            assert e.getMessage().equals("Invalid card rank") : "Exception message should be 'Invalid card rank'";
        }

        try {
            getCardValue("Z♦");
            assert false : "Expected IllegalArgumentException for invalid rank 'Z'";
        } catch (IllegalArgumentException e) {
            assert e.getMessage().equals("Invalid card rank") : "Exception message should be 'Invalid card rank'";
        }

        System.out.println("All tests passed!");
    }
}

