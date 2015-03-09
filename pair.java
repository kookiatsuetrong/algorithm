import java.util.*;
import java.lang.*;

class pair {

	static Map<String, Integer> cache = new HashMap<>();

	public static int solve(int [][] item, int current, int last) {
		if (current >= item.length)
			return 0;

		String key = current + " " + last;
		if (cache.containsKey(key))
			return cache.get(key);

		int value1 = 0;
		int value2 = 0;
		if (last == -1) {
			value1 = solve(item, current+1, last);
			value2 = solve(item, current+1, current) + 1;
		} else {
			value1 = solve(item, current+1, last);
			if (item[current][0] > item[last][1])
				value2 = solve(item, current+1, current) + 1;
		}

		int result = Math.max(value1, value2);
		cache.put(key, result);
		return result;
	}

	public static void main(String [] s) {
		Scanner scanner = new Scanner(System.in);
		int T = scanner.nextInt();
		for (int t = 1; t <= T; t++) {
			int N = scanner.nextInt();
			int item [][] = new int[N][2];
			for (int i = 0; i < N; i++) {
				item[i][0] = scanner.nextInt();
				item[i][1] = scanner.nextInt();
			}
			cache.clear();
			System.out.println("Case #" + t + ": " + solve(item, 0, -1));
		}
	}
}
