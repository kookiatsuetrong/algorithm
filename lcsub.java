import java.util.*;
import java.math.*;

// longest common substring
class lcsub {

	public static int solve(String s, String t) {
		if (s.length() == 0 || t.length() == 0) return 0;
		String key = s+"-"+t;
		if (cache.containsKey(key)) return cache.get(key);

		int result = 0;
		if (s.equals(t)) {
			result = s.length();
		} else {
			int value[] = new int[4];
			value[0] = solve(s.substring(1), t);
			value[1] = solve(s.substring(0, s.length()-1), t);
			value[2] = solve(s, t.substring(1));
			value[3] = solve(s, t.substring(0, t.length()-1));
			result = Math.max(value[0], value[1]);
			result = Math.max(result, value[2]);
			result = Math.max(result, value[3]);
		}

		cache.put(key, result);
		return result;
	}

	public static HashMap<String,Integer> cache = new HashMap<>();

	public static void main(String [] s) {
		System.out.println(solve("ATGCATTA", "CAT"));
		System.out.println(solve("ATGCATTA", "CATT"));
		System.out.println(solve("", "CATT"));
		System.out.println(solve("A", "A"));
		System.out.println(solve("ABABC", "BABCA"));
	}
}
