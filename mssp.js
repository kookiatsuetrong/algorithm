// maximum subsequence scalar product

function solve(a, b, m, n) {
	if (m < 0 || n < 0) return 0;
	var key = m + '-' + n;
	if (cache[key]) return cache[key];
	return cache[key] = Math.max(
		solve(a, b, m-1, n-1) + a[m] * b[n],
		solve(a, b, m-1, n  ),
		solve(a, b, m  , n-1)
	);
}

var cache = [];

function parse(data) {
	var lines = data.split('\n');
	var T = parseInt(lines[0]);
	for (var t = 1; t <= T; t++) {
		var A = [], B = []; cache = [];
		var fields = lines[t * 2 - 1].split(' ');
		var n = parseInt(fields[0]);
		for (var i = 0; i < n; i++) {
			A[i] = parseInt(fields[i+1]);
		}
		fields = lines[t * 2].split(' ');
		n = parseInt(fields[0]);
		for (var i = 0; i < n; i++) {
			B[i] = parseInt(fields[i+1]);
		}
		console.log('Case #' + t + ': ' + solve(A, B, A.length-1, B.length-1));
	}
}

function main() {
	process.stdin.resume();
	process.stdin.setEncoding("UTF8");
	var stream = "";
	process.stdin.on("data", function (data) { stream += data; });
	process.stdin.on("end", function () { parse(stream);});
}

main();
