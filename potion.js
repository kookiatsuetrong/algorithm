function solve(n, p, k) {
	var goal = n + '-' + p + '-' + k;
	var cache = [];
	var sum = [];
	var key;
	cache['0-0-0'] = [0,0,0];
	for (var i = 0; i < items.length; i++) {
		for (var index in cache) {
			sum[0] = cache[index][0] + items[i][0];
			sum[1] = cache[index][1] + items[i][1];
			sum[2] = cache[index][2] + items[i][2];
			if (sum[0] <= n && sum[1] <= p && sum[2] <= k) {
				key = sum[0] + '-' + sum[1] + '-' + sum[2];
				cache[key] = [sum[0], sum[1], sum[2]];
				if (key === goal) {
					return true;
				}
			}
		}
	}
	return cache[goal] != null;
}

var targets = [];
var items = [];

function parse(data) {
	var lines = data.split('\n');
	var k = 0;
	var T = parseInt(lines[k++]);
	for (var t = 1; t <= T; t++) {
		var targetTokens = lines[k++].split(' ');
		targets = [];
		for (var j = 0; j < targetTokens.length; j++) {
			targets[j] = parseInt(targetTokens[j]);
		}
		var count = parseInt(lines[k++]);
		items = [];
		for (var i = 0; i < count; i++) {
			var itemTokens = lines[k++].split(' ');
			items[i] = [];
			for (var j = 0; j < itemTokens.length; j++) {
				items[i][j] = parseInt(itemTokens[j]);
			}
		}

		var result = 'no';
		if (solve(targets[0], targets[1], targets[2], 0))
			result = 'yes';
		console.log('Case #' + t + ': ' + result);
	}
}

process.stdin.resume();
process.stdin.setEncoding("UTF8");
var stream = "";
process.stdin.on("data", function (input) { stream += input; });
process.stdin.on("end", function () { parse(stream);});
