import java.util.*;

class reduction {

	static int solve(String s) {
		if (cache.containsKey(s)) return cache.get(s);
		int min = s.length();
		boolean reducible = false;
		for (int i = 0; i < s.length() - 1; i++) {
			if (s.charAt(i) != s.charAt(i+1)) {
				reducible = true;
				String t = s.substring(0, i) +
						   reduce(s.substring(i, i+2)) +
						   s.substring(i+2);
				// System.out.println(s + " " + t);
				int value = solve(t);
				return value;
				/*
				if (min > value)
					min = value;
				*/
			}
		}

		cache.put(s, min);
		return min;
	}

	static HashMap<String, Integer> cache = new HashMap<>();

	static String reduce(String s) {
		switch (s) {
			case "ab": return "c";
			case "ba": return "c";
			case "ac": return "b";
			case "ca": return "b";
			case "bc": return "a";
			case "cb": return "a";
		}
		return s;
	}

	public static void main(String [] a) {
		Scanner scanner = new Scanner(System.in);
		int T = scanner.nextInt();
		for (int t = 1; t <= T; t++) {
			String s = scanner.next();
			System.out.println(solve(s));
		}
	}
}
