class Pascal {
	public static int pascal(int row, int col) {
		if (col == 0 || col == row) return 1;
		return pascal(row-1, col-1) + pascal(row-1, col);
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
