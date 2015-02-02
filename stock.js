function solve(level, stock) {
	if (level > data.length - 1) return 0;

	var key = level + '-' + stock;

	if (cache[key])
		return cache[key];

	var value1 = stock * data[level];		// sell all
	var value2 = -data[level];				// buy 1
	var value3 = 0;							// do nothing

	value1 += solve(level+1, 0);
	value2 += solve(level+1, stock+1);
	value3 += solve(level+1, stock);
	return cache[key] = Math.max(value1, Math.max(value2, value3));
}

function solve2(level, stock) {
	var profit = 0;
	var stock = 0;
	for (var i = 0; i < data.length-1; i++) {
		var value1 = stock * data[i]; // sell today
		var value2 = (stock+1) * data[i+1]; // sell tomorrow
		if (data[i] < data[i+1]) {
			stock ++;
			profit -= data[i];
		}
	}

	// profit += stock * data[data.length-1];

	return profit;
}

var data = [];
var cache = [];

function parse(input) {
	var lines = input.split('\n');
	var T = parseInt(lines[0]);
	for (var t = 1; t <= T; t++) {
		var N = parseInt(lines[t*2-1]);
		var tokens = lines[t*2].split(' ');
		data = [];
		cache = [];
		for (var i = 0; i < N; i++) {
			data[i] = parseInt(tokens[i]);
		}
		var result = solve2(0, 0);
		console.log(result);
	}
}

function main() {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	_input = "";
	process.stdin.on("data", function (input) { _input += input; });
	process.stdin.on("end", function () { parse(_input); });
}

main();

/*
Problem Statement

Your algorithms have become so good at predicting the market that you now know what the share price of Wooden Orange Toothpicks Inc. (WOT) will be for the next N days.

Each day, you can either buy one share of WOT, sell any number of shares of WOT that you own, or not make any transaction at all. What is the maximum profit you can obtain with an optimum trading strategy?

Input

The first line contains the number of test cases T. T test cases follow:

The first line of each test case contains a number N. The next line contains N integers, denoting the predicted price of WOT shares for the next N days.

Output

Output T lines, containing the maximum profit which can be obtained for the corresponding test case.

Constraints

1 <= T <= 10
1 <= N <= 50000

All share prices are between 1 and 100000

Sample Input

3
3
5 3 2
3
1 2 100
4
1 3 1 2
Sample Output

0
197
3
Explanation

For the first case, you cannot obtain any profit because the share price never rises.
For the second case, you can buy one share on the first two days, and sell both of them on the third day.
For the third case, you can buy one share on day 1, sell one on day 2, buy one share on day 3, and sell one share on day 4.


*/
