#include <stdio.h>

long fibonacci(long n) {
	if (n < 2) return n;
	return fibonacci(n-1) + fibonacci(n-2);
}
int main(void) {
	printf("%ld\n", fibonacci(40));
	return 0;
}

