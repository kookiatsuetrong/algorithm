// run by java -Xmx6g Sieve
class Sieve {
	public static final int MAX = 1_000_000_000;
	public static boolean [] prime = new boolean[MAX];

	public static void sieve()
	{
		for (int i = 0; i < MAX; i++) {
			prime[i] = true;
		}
		int n = (int)Math.sqrt(MAX);
		prime[0] = false;
		prime[1] = false;
		int i = 2;
		while (i <= n) {
			if (prime[i]) {
				int j = 2;
				while (i * j < MAX) {
					prime[i * j] = false;
					j++;
				}
			}
			i++;
		}
	}

	public static void main(String [] s) {
		sieve();
		System.out.println(prime[MAX-1]);
	}
}
