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
Performance:

		Sorted		Reversed
BFS		1.302		2.107
DFS		41.000		0.054
DP		2.606		2.566
DPR		0.057		29.000
*/

// BFS O(NG)
function bfs(goal, items) {
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
	// items.sort(function(a, b) { return a-b;});
	return search(items.length - 1, goal);

	function search(n, g) {
		if (n < 0 || g < 0) return false;
		if (g == 0) return cache[n][g] = true;
		if (n == 0) return cache[n][g] = g == items[n];
		if (cache[n][g]) return cache[n][g];
		return cache[n][g] = search(n-1, g-items[n]) || search(n-1, g);
	}
}

// DFS O(2^N)
function dfs(goal, items) {
	// items.sort(function(a, b) { return a-b;}).reverse();
	return search(0, 0);
	function search(level, sum) {
		if (sum == goal) return true;
		if (sum >  goal) return false;
		if (level > items.length) return false;
		return search(level+1, sum+items[level]) || search(level+1, sum);
	}
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
		var ok = true;
		if (sum % 2 != 0)
			ok = false;
		items.sort(function(a, b) { return a-b;})
		//.reverse()
		;
		// console.log(items);
		if (ok) {
			//console.log("Case #" + t + ": " + (bfs(parseInt(sum/2), items) ? "Yes" : "No"));
			console.log("Case #" + t + ": " + (dfs(parseInt(sum/2), items) ? "Yes" : "No"));
			//console.log("Case #" + t + ": " + (dp(parseInt(sum/2), items) ? "Yes" : "No"));
			//console.log("Case #" + t + ": " + (dpr(parseInt(sum/2), items) ? "Yes" : "No"));
		}
		else {
			console.log("Case #" + t + ": No");
		}
	}
}

process.stdin.resume();
process.stdin.setEncoding("UTF8");
var stream = "";
process.stdin.on("data", function (input) { stream += input; });
process.stdin.on("end", function () { parse(stream);});
