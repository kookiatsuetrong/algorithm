function print(row, col, n) {
	// console.log('row:' + row + ' col:' + col);
	if (col > row || col > n) return;
	if (col < row) {
		console.log(col + " ");
		print(row, col+1, n);
	}
	if (col == row) {
		console.log(col + " ");
		print(row+1, 1, n);
	}
}


print(1, 1, 5);
