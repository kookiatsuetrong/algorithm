import java.io.*;
import java.util.*;

public class stock {

	public static long solve(int level, long stock) {
		if (level > A.length - 1) return 0;
		String key = level + "-" + stock;
		if (map.containsKey(key))
			return map.get(key);

		long value1 = stock * A[level]; // sell all
		long value2 = -A[level]; // buy 1
		long value3 = 0; // do nothing

		value1 += solve(level+1, 0);
		value2 += solve(level+1, stock+1);
		value3 += solve(level+1, stock);
		long result = Math.max(value1, Math.max(value2, value3));
		map.put(key, result);
		return result;
	}

	public static int [] A;
	public static Map<String, Long> map;

	public static void main(String[] s) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for (int t = 1; t <= T; t++) {
			int N = sc.nextInt();
			A = new int[N];
			map = new HashMap<String, Long>();
			for (int i = 0; i < N; i++) {
				A[i] = sc.nextInt();
			}
			System.out.println(solve(0, 0));
		}
	}
}
