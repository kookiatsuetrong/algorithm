function pascal(row, col) {
	if (col == 0 || row == col) return 1;
	else return pascal(row-1, col-1) + pascal(row-1, col);
}

for (var i = 0; i < 10; i++) {
	var str = "";
	for (var j = 0; j <= i; j++)
		str += pascal(i, j) + " ";
	console.log(str);
}
