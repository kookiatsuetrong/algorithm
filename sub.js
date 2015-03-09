function count(p, s) {
	if (p == s) return 1;
	if (p.length > s.length) return 0;
	var key = p + '-' + s;
	if (cache[key]) return cache[key];
	var sum = 0;
	if (p.charAt(0) == s.charAt(0)) sum += count(p.substring(1), s.substring(1));
	sum += count(p, s.substring(1));
	return cache[key] = sum;
}

var cache = [];
console.log(count('cat', 'catapult'));
console.log(count("welcome to code jam", "wweellccoommee to code qps jam"));
console.log(count("welcome to code jam", "So you've registered. We sent you a welcoming email, to welcome you to code jam. But it's possible that you still don't feel welcomed to code jam. That's why we decided to name a problem \"welcome to code jam.\" After solving this problem, we hope that you'll feel very welcome. Very welcome, that is, to code jam."));

console.log(count("CAT","CATGAGT"));
