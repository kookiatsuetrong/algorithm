/*
The Partition Problem:
พ่อมดฝาแฝดได้รับมรดกมาเป็นเหรียญทองขนาดต่างๆกัน ทั้งคู่มาขอให้คุณช่วยเขียนโปรแกรมเพื่อหาว่าจะแบ่ง
เหรียญทองเป็นสองส่วนเท่ากันได้หรือไม่ เช่น มีเหรียญทอง 1, 2, และ 3 ออนซ์ สามารถแบ่งได้เป็นสอง
ส่วนเท่ากันคือ 1,2 ออนซ์ และ 3 ออนซ์
# Input บรรทัดแรกเป็นจำนวนข้อมูลทดสอบ ในแต่ละชุดมีจำนวนเหรียญและน้ำหนัก
2                   <span class="comment">มี 2 ข้อมูลทดสอบ </span>
3 1 2 3             <span class="comment">มี 3 เหรียญ หนัก 1 2 3 ออนซ์</span>
4 1 2 3 3           <span class="comment">มี 4 เหรียญ หนัก 1 2 3 3 ออนซ์</span>
# Output yes ถ้าสามารถแบ่งได้ หรือ no ถ้าแบ่งไม่ได้
Case #1: yes
Case #2: no
*/

/*
Performance (Lower is faster):
Max N = 30
		Sorted		Reversed
DFS		41.000		0.054		Depth First Search
DP		2.606		2.566		Dynamic Programming Pseudo Algorithm
DPR		0.057		0.900		Dynamic Programming Memoization Pseudo Algorithm
BFS		0.425		1.110		Pseudo Algorithm

Max N = 42
		Sorted		Reversed	Random
DFS		300+		0.057
DP		8.788		8.751		8.748	8.727	8.630	8.641	8.651
DPR		0.059		4.928		0.707	3.352	2.153	13.528	1.201
BFS		2.308		3.157		2.083	2.885	5.688	4.199	5.020
*/

// DFS O(2^N)
function dfs(goal, items) {
	// items.sort(function(a, b) { return a-b;}).reverse(); // for optimization only
	return search(0, 0);
	function search(level, sum) {
		if (sum == goal) return true;
		if (sum >  goal) return false;
		if (level > items.length) return false;
		return search(level+1, sum+items[level]) || search(level+1, sum);
	}
}

// DP Iteration O(N^2)
function dp(goal, items) {
	var cache = [];
	for (var i = 0; i < items.length; i++)
		cache[i] = [];
	for (var v = 0; v <= goal; v++)
		cache[0][v] = false;
	cache[0][0] = true;
	cache[0][items[0]] = true;

	for (var i = 1; i < items.length; i++) {
		cache[i][0] = true;
		for (var v = 1; v <= goal; v++) {
			cache[i][v] = cache[i-1][v];
			if (!cache[i][v] && v - items[i] >= 0)
				cache[i][v] = cache[i-1][v-items[i]];
		}
	}
	return cache[items.length-1][goal];
}

// DP Memoization O(N^2)
function dpr(goal, items) {
	var cache = [];
	for (var i = 0; i < items.length; i++)
		cache[i] = [];
	// items.sort(function(a, b) { return a-b;});    // for optimization only
	return search(items.length - 1, goal);

	function search(n, g) {
		if (n < 0 || g < 0) return false;
		if (g == 0) return cache[n][g] = true;
		if (cache[n][g] != null) return cache[n][g];
		return cache[n][g] = search(n-1, g-items[n]) || search(n-1, g);
	}
}

// BFS O(NG)
function bfs_string(goal, items) {
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
	return queue[goal] != null;
}

// BFS O(NG)
function bfs(goal, items) {
	var queue = [];
	queue[0] = true;
	for (var i = 0; i < items.length; i++) {
		for (var q in queue) {
			var value = parseInt(q) + items[i];
			if (value == goal) return true;        // for optimization only
			if (goal >= value) queue[value] = true;
		}
	}
	return queue[goal] != null;
}

function parse(data) {
	var lines = data.split('\n');
	var T = parseInt(lines[0]);
	for (var t = 1; t <= T; t++) {
		var tokens = lines[t].split(' ');
		var n = parseInt(tokens[0]);
		var items = [];
		var sum = 0;
		for (var i = 1; i <= n; i++) {
			items[i-1] = parseInt(tokens[i]);
			sum += items[i-1];
		}
		/*
		items.sort(function(a, b) { return a-b;})//.reverse()
		for (var k = 0; k < items.length; k++) {
			var r = parseInt(Math.random() * items.length);
			var tmp = items[k];
			items[k] = items[r];
			items[r] = tmp;
		}
		*/
		var result = "No";
		if (sum % 2 == 0) {
			var algorithm = {'dfs': dfs, 'dp':dp, 'dpr':dpr, 'bfs':bfs, 'bfs_string': bfs_string};
			result = algorithm['bfs'](parseInt(sum/2), items) ? "Yes" : "No";
		}
		console.log("Case #" + t + ": " + result);
	}
}

function main() {
	process.stdin.resume();
	process.stdin.setEncoding("UTF8");
	var stream = "";
	process.stdin.on("data", function (input) { stream += input; });
	process.stdin.on("end", function () { parse(stream);});
}

main();
