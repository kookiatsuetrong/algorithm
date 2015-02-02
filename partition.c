#include <stdio.h>
#define MAX 60
#define MAX_GOAL (1048576 * 4)

int A[MAX];
int N;
int goal;
char cache[MAX][MAX_GOAL];

int dfs(int level, int sum) {
	if (level >= N) return 0;
	if (goal == sum) return 1;
	return  dfs(level+1, sum+A[level]) ||
			dfs(level+1, sum);
}
int dfs_main() {
	return dfs(0, 0);
}

int dp() {
	for (int j = 0; j <= goal; j++)
		cache[0][j] = 0;
	cache[0][0] = 1;
	cache[0][A[0]] = 1;

	for (int i = 1; i < N; i++) {
		cache[i][0] = 1;
		for (int j = 1; j <= goal; j++) {
			cache[i][j] = cache[i-1][j];
			if (cache[i][j] == 0 && j-A[i] >= 0)
				cache[i][j] = cache[i-1][j-A[i]];
		}
	}
	return cache[N-1][goal];
}

int dpr(int i, int g) {
	if (g == 0) return 1;
	if (g < 0 || i < 0) return 0;
	if (cache[i][g] >= 0) return cache[i][g];
	return cache[i][g] = dpr(i-1, g-A[i]) ||
						 dpr(i-1, g);
}

int dpr_main() {
	for (int i = 0; i < N; i++)
		for (int j = 0; j <= goal; j++)
			cache[i][j] = -1;

	return dpr(N-1, goal);
}

int bfs() {
	char visited[MAX_GOAL + 1];
	for (int j = 0; j <= MAX_GOAL; j++)
		visited[j] = 0;
	visited[0] = 1;
	for (int i = 0; i < N; i++) {
		for (int j = goal; j >= 0; j--) {
			int value = j + A[i];
			if (visited[j] && value <= goal) {
				visited[value] = 1;
				if (value == goal) return 1;
			}
		}
	}
	return visited[goal];
}

int main(void) {
	int T;
	scanf("%d", &T);
	for (int t = 1; t <= T; t++) {
		int result = 0;
		goal = 0;
		scanf("%d", &N);
		for (int i = 0; i < N; i++) {
			scanf("%d", &A[i]);
			goal += A[i];
		}
		scanf("\n");
		if (goal % 2 == 0) {
			goal /= 2;
			int (*algorithm[])() = {dfs_main, dp, dpr_main, bfs};
			result = algorithm[3]();
		}
		printf("Case #%d: %s\n", t, result ? "Yes" : "No");
	}
	return 0;
}
