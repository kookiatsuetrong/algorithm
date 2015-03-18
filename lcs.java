import java.util.*;

class lcs {

	static int solve(String s, String t) {
		String key = s + "-" + t;
		if (cache.containsKey(key)) return cache.get(key);
		int result = 0;
		if (s.length() == 0 || t.length() == 0) {
			result = 0;
		} else if (s.charAt(0) == t.charAt(0)) {
			result = 1 + solve(s.substring(1), t.substring(1));
		} else {
			int value1 = solve(s, t.substring(1));
			int value2 = solve(s.substring(1), t);
			result = Math.max(value1, value2);
		}
		cache.put(key, result);
		return result;
	}

	static HashMap<String,Integer> cache = new HashMap<>();

	public static void main(String [] a) {
		String s = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
		String t = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
		System.out.println(solve(s + "X" + s, t + "X" + t));
	}
}
