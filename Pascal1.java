class Pascal {
	public static final int MAX = 100;
	public static int [][] cache = new int[MAX][MAX];
	public static int pascal(int row, int col) {
		if (col == 0 || col == row) return 1;
		if (cache[row][col] > 0) return cache[row][col];
		return cache[row][col] = pascal(row-1, col-1) + pascal(row-1, col);
	}
	public static void main(String [] s) {
		for (int i = 0; i < 10; i++) {
			for (int j = 0; j <= i; j++) {
				System.out.print(pascal(i,j) + " ");
			}
			System.out.println();
		}
	}
}
