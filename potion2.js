

function solve(n, p, k, m) {
	var key = n + ':' + p + ':' + k + ':' + m;
	if (cache[key]) return cache[key];
	if (n  < 0 || p  < 0 || k  < 0) return false;
	if (n == 0 && p == 0 && k == 0) return cache[key] = true;
	if (m >= 0) {
		var result = solve(n-items[m][0], p-items[m][1], k-items[m][2], m-1);
		if (result == true) return cache[key] = result;
		return cache[key] = solve(n, p, k, m-1);
	}
	return cache[key] = false;
}

function solve_dp(n, p, k, m) {
	for (var i = 0; i < m; i++) {
		cache[makeKey(0,0,0,i)] = true;
		cache[makeKey(items[i][0], items[i][1], items[i][2], i)] = true;
	}

	for (var i = 1; i < m; i++) {

	for (var nx = 0; nx <= n; nx++) {
		for (var px = 0; px <= p; px++) {
			for (var kx = 0; kx <= k; kx++) {
					var key  = makeKey(nx, px, kx, i);
					var keyp = makeKey(nx, px, kx, i-1);
					var keyq = makeKey(nx-items[i][0], px-items[i][1], kx-items[i][2], i-1);
					cache[key] = cache[keyp] || cache[keyq];

			}
		}
	}

	}

	return cache[makeKey(n,p,k,m)];
}

function makeKey(n, p, k, m) {
	return n + ':' + p + ':' + k + ':' + m;
}

var items = [];
var cache = [];

function parse(data) {
	var lines = data.split('\n');
	var T = parseInt(lines[0]);
	var L = 1;
	for (var t = 1; t <= T; t++) {
		var fields = lines[L++].split(' ');
		n = parseInt(fields[0]);
		p = parseInt(fields[1]);
		k = parseInt(fields[2]);
		items = [];
		var count = parseInt(lines[L++]);
		for (var i = 0; i < count; i++) {
			fields = lines[L++].split(' ');
			items[i] = [];
			items[i][0] = parseInt(fields[0]);
			items[i][1] = parseInt(fields[1]);
			items[i][2] = parseInt(fields[2]);
		}
		cache = [];
		var result = 'no';
		if (true == solve_dp(n, p, k, count-1))
			result = 'yes';
		console.log('Case #' + t + ': ' + result);
	}
}


function main() {
	var data = "";
	process.stdin.resume();
	process.stdin.setEncoding("UTF8");
	process.stdin.on('data', function(chunk) { data += chunk; });
	process.stdin.on('end', function() { parse(data); });
}

main();
