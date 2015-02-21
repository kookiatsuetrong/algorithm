function solve(data, L, R) {
	if (L == R) return data[L];
	var key = L + ' ' + R;
	if (cache[key]) return cache[key];
	var max = null;
	for (var i = L+1; i <= R; i += 2) {
		var left  = solve(data, L, i-1);
		var right = solve(data, i+1, R);
		var value = 0;
		if (data[i] == '+') value = parseFloat(left) + parseFloat(right);
		if (data[i] == '*') value = parseFloat(left) * parseFloat(right);
		if (max == null) max = value;
		if (max < value) max = value;
	}
	return cache[key] = max;
}
var cache = [];

var expression = "3 * 5 + 7";
expression = "1 * 2 + 3 * 4 * 2 + 3 * 4 * 2 + 3 * 4 * 2 + 3 * 4 * 2 + 3 * 4 * 2 + 3 * 4 * 2 + 3 * 4 * 2 + 3 * 4";
expression = "-3 * 3 + 3";
//expression = "6 * 3 + 2 * 5";
expression = "0.1 * 0.1 + 0.1";
expression = "-3 * -2 + -4";

var data = expression.split(' ');
console.log(solve(data, 0, data.length-1));
