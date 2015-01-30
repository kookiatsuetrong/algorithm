#include <stdio.h>
int pascal(int row, int col) {
	if (col == 0 || col == row) return 1;
	return pascal(row-1, col-1) + pascal(row-1,col);
}
int main(void) {
	for (int i = 0; i < 10; i++) {
		for (int j = 0; j <= i; j++) {
			printf("%4d", pascal(i,j));
		}
		printf("\n");
	}
	return 0;
}
