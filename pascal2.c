#include <stdio.h>
#define MAX 100
int cache[MAX][MAX];
int pascal(int row, int col) {
	if (cache[row][col] > 0) return cache[row][col];
	if (col == 0 || col == row) return cache[row][col] = 1;
	return cache[row][col] = pascal(row-1, col-1) + pascal(row-1,col);
}
int main(void) {
	for (int i = 0; i < MAX; i++)
		for (int j = 0; j < MAX; j++)
			cache[i][j] = 0;
	for (int i = 0; i < 10; i++) {
		for (int j = 0; j <= i; j++) {
			printf("%4d", pascal(i,j));
		}
		printf("\n");
	}
	return 0;
}
