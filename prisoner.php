<?
function solve($left, $right, $list) {
	global $cache;
	$key = $left . '-' . $right;
	if ($cache[$key]) return $cache[$key];
	if ($right <= $left) return $cache[$key] = 0;
	$min = null;
	for ($i = 0; $i < count($list); $i++) {
		if ($list[$i] >= $left && $list[$i] <= $right) {
			$gold = $right - $left;
			$gold += solve($left, $list[$i] - 1,  $list);
			$gold += solve($list[$i] + 1, $right, $list);
			if ($min == null)
				$min = $gold;
			if ($min > $gold)
				$min = $gold;
		}
	}
	if ($min == null)
		$min = 0;
	return $cache[$key] = $min;
}

$cache = [];

fscanf(STDIN, "%d\n", $T);
for ($t = 1; $t <= $T; $t++) {
	$line = fgets(STDIN);
	$token = explode(" ", $line);
	$prisoner = $token[0] + 0;

	$line = fgets(STDIN);
	$list = explode(" ", $line);
	for ($i = 0; $i < count($list); $i++)
		$list[$i] = $list[$i] + 0;
	$cache = [];
	$result = solve(1, $prisoner, $list);
	print "Case #" . $t . ": " . $result . "\n";
}
