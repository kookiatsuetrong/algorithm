

function solve(u, d) {
	var i = 2;
	while (u * i < d) {
		i++;
	}

	console.log('1/' + i + ' + ');

	if (u * i == d) return;
	else solve(u * i - d, d * i);
}

solve(5, 6);   console.log('---------------');
solve(7, 15);  console.log('---------------');
solve(5, 121); console.log('---------------');
