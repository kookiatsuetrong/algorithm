class rec {
	public static void print(int r, int c, int d, int n) {
		if (c > r || c > n) return;
		if (c == r && r == n) {
			System.out.print(c + " \n");
			d *= -1;
			print(r+d, 1, d, n);
		} else if (c < r) {
			System.out.print(c + " ");
			print(r, c+1, d, n);
		} else if (c == r) {
			System.out.print(c + " \n");
			print(r+d, 1, d, n);
		}
	}

	public static void main(String [] s) {
		print(1, 1, 1, 9);
	}
}
