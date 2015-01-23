// Bisection Algorithm for finding root of equation

/*
function f(x) {
	return x * x * x - x - 2;
}
*/

str = "function f(x) { return x * x * x - x - 2; }";

function bisection(b, e) {
	if (b > e) return b;
	var m = (b + e) / 2.0;
	var r = f(m);
	// console.log(b + ' ' + e + ' ' + m + ' ' + r);

	if (Math.abs(r) < 0.0001) return m;
	if (r > 0) return bisection(b, m);
	if (r < 0) return bisection(m, e);
}

eval(str);
var result = bisection(-100, 100);
console.log(result);
console.log(f(result.toFixed(6)));
