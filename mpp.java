import java.util.*;

class mpp {

	public static boolean palindrome(String s) {
		for (int i = 0; i < s.length() / 2; i++)
			if (s.charAt(i) != s.charAt(s.length()-1-i))
				return false;
		return true;
	}

	public static int solve(String s) {
		if (palindrome(s)) return 0;
		if (cache.containsKey(s)) return cache.get(s);
		int result = s.length()-1;
		for (int i = 1; i < s.length(); i++) {
			String l = s.substring(0, i);
			String r = s.substring(i);
			int value1 = solve(l);
			int value2 = solve(r);
			if (result > value1 + value2 + 1)
				result = value1 + value2 + 1;
		}
		cache.put(s, result);
		return result;
	}

	public static HashMap<String,Integer> cache = new HashMap<>();
	public static void main(String [] s) {
		System.out.println(solve("ababbbabbababa"));
		System.out.println(solve("a"));
		System.out.println(solve("aa"));
		System.out.println(solve("ab"));
		System.out.println(solve(""));
		System.out.println(solve("abcba"));
		System.out.println(solve("abcbaabcbaabcbaabcbaabcbaabcbaabcbaabcbaabcbaabcbad"));
	}
}
