function LIS(a, n, m) {
	if (n >= a.length) return 0;
	var key = n + '-' + m;
	if (cache[key]) return cache[key];
	var value1 = 0;
	if (a[n] > a[m])
		value1 = LIS(a, n+1, n) + 1;
	var value2 = LIS(a, n+1, m);
	return cache[key] = Math.max(value1, value2);
}


var a = [];
a = [3, 4, 1, 2, 4, 5];
// a = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
// for (var i = 0; i < 1000; i++) a[i] = i;
a[-1] = -10000;
var cache = [];
console.log(LIS(a, 0, -1));
