
function solve(s, t, i, j) {
	if (i == 0 && j == 0) cache = [];
	if (s.length <= i && t.length <= j) return 0;
	if (s.length <= i) return t.length - j;
	if (t.length <= j) return s.length - i;
	if (s == t) return 0;
	var key = i+'-'+j;
	if (cache[key]) return cache[key];
	if (s.charAt(i) == t.charAt(j)) return cache[key] = solve(s, t, i+1, j+1);

	return cache[key] = Math.min(
		1 + solve(s, t, i+1, j  ),  // remove s[i]
		1 + solve(s, t, i  , j+1),  // insert t[j]
		1 + solve(s, t, i+1, j+1)   // replace s[i] with t[j]
	);
}

var cache = [];
console.log(solve('KITTEN', 'SITTING', 0, 0));          // 3
console.log(solve('intention', 'execution', 0, 0));     // 5
console.log(solve("appropriate meaning", "approximate matching", 0, 0)); // 7
