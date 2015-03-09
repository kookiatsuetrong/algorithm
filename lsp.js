function solve(data) {
	if (data.length <= 1) return data.length;
	if (cache[data]) return cache[data];
	if (data.charAt(0) == data.charAt(data.length-1)) {
		return cache[data] = solve(data.substring(1, data.length-1)) + 2;
	} else {
		return cache[data] = Math.max(
			solve(data.substring(1)),
			solve(data.substring(0, data.length-1)));
	}
}
var cache = [];

console.log(solve("character"));
console.log(solve("racecar"));
console.log(solve(""));
