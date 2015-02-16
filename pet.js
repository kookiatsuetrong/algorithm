function solve(items, L, R) {
	if (R - L <= 1)
		return 0;

	var M = L;
	for (var i = M; i <= R; i++) {
		if (items[M] > items[i]) {
			M = i;
		}
	}

	if (L == M)
		return solve(items, L+1, R);
	if (M == R)
		return solve(items, L, R-1);

	if (M - L < R - M) {
		for (var i = M; i > L; i--) {
			items[i] = items[i-1];
		}
		return M - L + solve(items, L+1, R);
	}
	else {
		for (var i = M; i < R; i++) {
			items[i] = items[i+1];
		}
		return R - M + solve(items, L, R-1);
	}
}

function parse(data) {
	var lines = data.split('\n');
	var T = parseInt(lines[0]);
	for (var t = 1; t <= T; t++) {
		var N = parseInt(lines[t * 2 - 1]);
		var fields = lines[t * 2].split(' ');
		var items = [];
		for (var i = 0; i < N; i++) {
			items[i] = parseInt(fields[i]);
		}
		var result = solve(items, 0, N - 1);
		console.log('Case #' + t + ': ' + result);
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
