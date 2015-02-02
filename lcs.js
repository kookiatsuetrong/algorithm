function LCS(s, t, m, n) {
	if (m >= s.length)
		return 0;
	if (n >= t.length)
		return 0;
	var key = m + '-' + n;
	if (cache[key])
		return cache[key];
	var value0 = 0;
	if (s.charAt(m) === t.charAt(n))
		value0 = LCS(s, t, m+1, n+1) + 1;
	var value1 = LCS(s, t, m+1, n);
	var value2 = LCS(s, t, m, n+1);
	return cache[key] = Math.max(value0, Math.max(value1, value2));
}


var s = "ATGCAGAGGGTACATTTGATAGCT";
var t = "TGAGCAGTGCAGGCAGGCAGCAGG";
var cache = [];
console.log(LCS("ATGCAGAGGGTACATTTGATAGCT", "TGAGCAGTGCAGGCAGGCAGCAGG", 0, 0));
var cache = [];
console.log(LCS(s, s, 0, 0));
var cache = [];
console.log(LCS(s, s+s, 0, 0));
var cache = [];
console.log(LCS(t+s, s+t, 0, 0));
var cache = [];
console.log(LCS(s+t+t+t+t+t+t+t+t+t+t+t, t+s+t+t+t+t+t+t+t+t+t+t, 0, 0));
