import java.util.*;

class makepal {

	static int solve(String s) {
		if (cache.containsKey(s)) return cache.get(s);
		int result = 0;
		if (palindrome(s)) {
			result = 0;
		} else {
			int value1 = 1 + solve(s.substring(1));
			int value2 = 1 + solve(s.substring(0, s.length()-1));
			result = Math.min(value1, value2);
		}
		cache.put(s, result);
		return result;
	}
	static HashMap<String,Integer> cache = new HashMap<>();

	static boolean palindrome(String s) {
		for (int i = 0; i < s.length()/2; i++) {
			if (s.charAt(i) != s.charAt(s.length()-1-i)) {
				return false;
			}
		}
		return true;
	}

	public static void main(String [] a) {
		System.out.println(solve("AAB"));
		System.out.println(solve(""));
		System.out.println(solve("A"));
		System.out.println(solve("AA"));
		System.out.println(solve("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
	}
}
