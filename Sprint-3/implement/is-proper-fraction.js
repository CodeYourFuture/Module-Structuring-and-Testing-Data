public class FractionChecker {

    public static boolean isProperFraction(int numerator, int denominator) {
        if (denominator == 0) {
            throw new IllegalArgumentException("Denominator cannot be zero");
        }
        return Math.abs(numerator) < Math.abs(denominator);
    }

    public static void main(String[] args) {
    
        assert isProperFraction(2, 3) == true : "Test failed: 2/3 should be a proper fraction";

        assert isProperFraction(5, 2) == false : "Test failed: 5/2 should be an improper fraction";

        try {
            isProperFraction(3, 0);
            assert false : "Test failed: Denominator of 0 should throw an error";
        } catch (IllegalArgumentException e) {
            assert e.getMessage().equals("Denominator cannot be zero") : "Test failed: Incorrect error message for zero denominator";
        }

        assert isProperFraction(-4, 7) == true : "Test failed: -4/7 should be a proper fraction";

        assert isProperFraction(3, 3) == false : "Test failed: 3/3 should not be a proper fraction";

        System.out.println("All tests passed!");
    }
}
