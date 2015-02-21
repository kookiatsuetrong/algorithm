
function solve(data, a, z) {
	if (a == z) {
		return data[a];
	}

	var max = null;
	for (var i = a; i < z; i++) {
		var value1 = solve(data, a, i);
		var value2 = solve(data, i+1, z);
		// var value = parseFloat(value1) / parseFloat(value2);
		var value = parseInt(value1) % parseInt(value2);
		if (max == null) max = value;
		if (max < value) max = value;
	}
	return max;
}




var data = [4, 8, 4];
console.log(solve(data, 0, data.length-1));
