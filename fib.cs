class fib {
	public static long fibonacci(long n) {
		if (n < 2) return n;
		return fibonacci(n-1) + fibonacci(n-2);
	}
	public static void Main() {
		System.Console.WriteLine(fibonacci(40));
	}
}

