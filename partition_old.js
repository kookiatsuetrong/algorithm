function solve(goal, items) {
	var queue = [];
	queue[0] = '';
	for (var i = 0; i < items.length; i++) {
		for (var q in queue) {
			var value = parseInt(q) + items[i];
			var info  = queue[q] + '+' + items[i];
			if (goal >= value && !queue[value]) {
				queue[value] = info;
			}
		}
	}
	// console.log(queue.length);
	return queue[goal] != null;
}

function parse(data) {
	var lines = data.split('\n');
	var T = parseInt(lines[0]);
	for (var t = 1; t <= T; t++) {
		var n = parseInt(lines[1]);
		var items = [];
		for (var i = 0; i < n; i++) {
			items[i] = parseInt(lines[i+2]);
		}
		console.log(solve(t, items));
	}
}

process.stdin.resume();
process.stdin.setEncoding("UTF8");
var stream = "";
process.stdin.on("data", function (input) { stream += input; });
process.stdin.on("end", function () { parse(stream);});
