import java.util.*;
import java.io.*;

class cookie {

	static boolean isCorrect(String s) {
		String [] tokens = s.split(" ");
		int [] a = new int[tokens.length];
		for (int i = 0; i < tokens.length; i++) {
			try {
				a[i] = Integer.parseInt(tokens[i]);
			}
			catch (Exception e) {
				System.out.println(tokens[i]);
			}
		}

		// correct ?
		boolean correct = true;
		for (int i = 1; i < a.length; i++) {
			if (a[0] != a[i])
				correct = false;
		}
		return correct;
	}

	public static int solve(String s) {
		ArrayList<String> queue = new ArrayList<>();
		HashMap<String, Integer> cache = new HashMap<>();

		queue.add(s);
		cache.put(s, 0);
		int n = 0;
		while (true) {
			s = queue.get(n);
			n++;
			if (isCorrect(s)) {
				return cache.get(s);
			}

			String [] tokens = s.split(" ");
			int [] a = new int[tokens.length];
			for (int i = 0; i < tokens.length; i++) {
				a[i] = Integer.parseInt(tokens[i]);
			}

			int [] x = {1, 2, 5};
			for (int k = 0; k < x.length; k++) {
				for (int i = 0; i < a.length; i++) {
					String t = "";
					for (int j = 0; j < a.length; j++) {
						if (i == j)
							t += (a[j] - x[k]) + " ";
						else
							t +=  a[j] + " ";
					}
					queue.add(t);
					cache.put(t, cache.get(s) + 1);
				}
			}
		}
	}

	public static void main(String [] a) {
		Scanner scanner = new Scanner(System.in);
		int T = scanner.nextInt();
		for (int t = 1; t <= T; t++) {
			int N = scanner.nextInt();
			String s = "";
			for (int i = 0; i < N; i++) {
				s += scanner.nextInt() + " ";
			}

			System.out.println(solve(s));
		}

	}
}
