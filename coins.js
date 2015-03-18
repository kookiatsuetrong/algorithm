
function dp(coins, left, right) {
	if (right - left == 1) return Math.max(coins[left], coins[right]);
	if (right == left) return coins[left];
	var key = left + '-' + right;
	if (cache[key]) return cache[key];

	//            User           Opponent         Subproblem
	var valueLL = coins[left ] - coins[left+1 ] + dp(coins, left+2, right  );
	var valueLR = coins[left ] - coins[right  ] + dp(coins, left+1, right-1);
	var valueRR = coins[right] - coins[right-1] + dp(coins, left,   right-2);
	var valueRL = coins[right] - coins[left   ] + dp(coins, left+1, right-1);
	return cache[key] = Math.max(valueLL, valueLR, valueRR, valueRL);
}

var cache = [];
function solve(coins) {
	cache = [];
	return dp(coins, 0, coins.length-1);
}

console.log(solve([1, 3, 5, 2, 3, 1]));
console.log(solve([1, 3, 5, 2, 3   ]));
console.log(solve([   3, 5, 2, 3, 1]));
