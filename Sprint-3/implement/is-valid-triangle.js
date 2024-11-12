public class TriangleChecker {

    public static boolean isValidTriangle(int a, int b, int c) {
        if (a <= 0 || b <= 0 || c <= 0) {
            return false;
        }
        
        return (a + b > c) && (a + c > b) && (b + c > a);
    }

    public static void main(String[] args) {
    
        assert isValidTriangle(3, 3, 3) == true : "Test failed: 3, 3, 3 should be a valid triangle";

        assert isValidTriangle(1, 2, 3) == false : "Test failed: 1, 2, 3 should be an invalid triangle";

        assert isValidTriangle(0, 5, 7) == false : "Test failed: 0, 5, 7 should be an invalid triangle";

        assert isValidTriangle(-3, 4, 5) == false : "Test failed: -3, 4, 5 should be an invalid triangle";

        assert isValidTriangle(3, 4, 5) == true : "Test failed: 3, 4, 5 should be a valid triangle";

        assert isValidTriangle(7, 10, 5) == true : "Test failed: 7, 10, 5 should be a valid triangle";

        System.out.println("All tests passed!");
    }
}
