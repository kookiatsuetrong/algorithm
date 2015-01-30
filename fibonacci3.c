#include <stdio.h>
#define MAX 100
long cache[MAX];
long fibonacci(int n) {
	if (cache[n] != -1) return cache[n];
	if (n == 0 || n == 1) return cache[n] = n;
	return cache[n] = fibonacci(n-1) + fibonacci(n-2);
}
void initialize() {
	for (int i = 0; i < MAX; i++)
		cache[i] = -1;
}
int main(void) {
	initialize();
	printf("%ld\n", fibonacci(40));
}
