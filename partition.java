import java.util.*;

class Partition {

	public static boolean dfs(int [] A, int goal, int level, int sum) {
		if (level >= A.length) return false;
		if (goal == sum) return true;
		return  dfs(A, goal, level+1, sum+A[level]) ||
				dfs(A, goal, level+1, sum);
	}

	public static boolean dp(int [] A, int goal) {
		boolean [][] cache = new boolean[A.length][goal + 1];
		cache[0][0] = true;
		cache[0][A[0]] = true;
		for (int i = 1; i < A.length; i++) {
			cache[i][0] = true;
			for (int j = 1; j <= goal; j++) {
				int sum = j - A[i];
				if (sum >= 0) {
					cache[i][j] = cache[i-1][j] ||
								  cache[i-1][sum];
				}
			}
		}
		return cache[A.length-1][goal];
	}

	public static short dpr(int [] A, int goal, int level, int sum) {
		if (level < 0 || sum < 0) return 0;
		if (sum == 0) return 1;
		if (cache[level][sum] != -1) return cache[level][sum];
		cache[level][sum] = dpr(A, goal, level-1, sum-A[level]);
		if (cache[level][sum] == 1)
			return cache[level][sum];
		cache[level][sum] = dpr(A, goal, level-1, sum);
		return cache[level][sum];
	}
	public static short [][] cache;
	public static boolean dpr_main(int [] A, int goal) {
		cache = new short[A.length][goal+1];
		for (int i = 0; i < A.length; i++)
			for (int j = 0; j <= goal; j++)
				cache[i][j] = -1;
		return dpr(A, goal, A.length-1, goal) == 1;
	}

	public static boolean bfs(int [] A, int goal) {
		boolean [] visited = new boolean[goal+1];
		visited[0] = true;
		for (int i = 0; i < A.length; i++) {
			for (int j = goal; j >= 0; j--) {
				int value = j + A[i];
				if (visited[j] && goal >= value) {
					visited[value] = true;
					if (goal == value) return true;
				}
			}
		}
		return visited[goal];
	}

	public static void main(String [] s) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for (int t = 1; t <= T; t++) {
			int N = sc.nextInt();
			int [] A = new int[N];
			int goal = 0;
			for (int i = 0; i < N; i++) {
				A[i] = sc.nextInt();
				goal += A[i];
			}
			boolean result = false;
			if (goal % 2 == 0) {
				// result = dfs(A, goal/2, 0, 0);
				// result = dp(A, goal/2);
				// result = dpr_main(A, goal/2);
				result = bfs(A, goal/2);
			}
			System.out.println("Case #" + t + ":" + (result ? "Yes" : "No"));
		}
	}
}
