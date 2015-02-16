function solve(day, item, items) {
	var key = day + '-' + item;
	if (cache[key]) return cache[key];
	var value1 = 0, value2 = 0;
	if (item < items.length) {
		value1 = solve(day, item+1, items);
		if (day < items[item].start) {
			value2 = items[item].revenue + solve(items[item].finish, item+1, items);
		}
	}
	return cache[key] = Math.max(value1, value2);
}
var cache = [];

function parse(data) {
	var lines = data.split("\n");
	var T = parseInt(lines[0]);
	var L = 1;
	for (var t = 1; t <= T; t++) {
		var N = parseInt(lines[L++]);
		var items = [];
		for (var i = 0; i < N; i++) {
			var fields = lines[L++].trim().split(' ');
			var item = {
				revenue: parseInt(fields[0]),
				start:   parseInt(fields[1]),
				finish:  parseInt(fields[2])};
			items[i] = item;
		}
		items.sort(function(a, b) { return a.start - b.start; });
		cache = [];
		var result = solve(0, 0, items);
		console.log("Case #" + t + ": " + result);
	}
}

function main() {
	var data = ""
	process.stdin.resume();
	process.stdin.setEncoding("UTF8");
	process.stdin.on("data", function(d) { data += d; } );
	process.stdin.on("end", function() { parse(data); } );
}

main();
