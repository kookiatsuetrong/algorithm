function solve(data, L, R, value) {
	if (L == R) {
		if (data[L] == "true"  && value == true ) return 1;
		if (data[L] == "false" && value == false) return 1;
		return 0;
	}
	var key = value + '-' + L + '-' + R;
	if (cache[key]) return cache[key];

	var sum = 0;
	for (var i = L+1; i <= R; i += 2) {
		var leftTrue   = solve(data, L, i-1, true );
		var leftFalse  = solve(data, L, i-1, false);
		var rightTrue  = solve(data, i+1, R, true );
		var rightFalse = solve(data, i+1, R, false);

		if (data[i] == "and" && value == true)
			sum +=  leftTrue  * rightTrue  ;
		if (data[i] == "and" && value == false)
			sum +=  leftTrue  * rightFalse +
					leftFalse * rightTrue  +
					leftFalse * rightFalse ;
		if (data[i] == "or"  && value == true)
			sum +=  leftTrue  * rightTrue  +
					leftTrue  * rightFalse +
					leftFalse * rightTrue  ;
		if (data[i] == "or"  && value == false)
			sum +=  leftFalse * rightFalse ;
		if (data[i] == "xor" && value == true)
			sum +=  leftTrue  * rightFalse +
					leftFalse * rightTrue  ;
		if (data[i] == "xor" && value == false)
			sum +=  leftTrue  * rightTrue  +
					leftFalse * rightFalse ;
	}

	return cache[key] = sum;
}
var cache = [];



var
string = "true and false xor true";
string = "true xor true";
// string = "true and false xor true or true";
// string = "true or true and false xor true"
// string = "true and false or true xor false";

var data = string.split(" ");
console.log(solve(data, 0, data.length-1, true));









/*

symbol[]    = {T, T, F, T}
       operator[]  = {|, &, ^}


T & F ^ T
(T & F) ^ T
T & (F ^ T)

true and false xor true or true
T & F ^ T | T
T & _________ = 2
    F ^ _____ =   1
	_____ | T =   1
_____ ^ _____ = 1
_________ | T = 2
T & _____     =   1
_____ ^ T     =   1

























*/
