
function insert(node, data) {
	if (node == null) {
		node = new Object();
		node.data = data;
		return node;
	} else {
		if (data < node.data) {
			node.left = insert(node.left, data);
			return node;
		} else {
			node.right = insert(node.right, data);
			return node;
		}
	}
}

function delete(node, data) {
	if (node == null) return node;
	if (node.data == data) {
		if (node.right) {
			node.data = node.right.data;
			
		} else if (node.left) {

		} else {
			delete node;
			return null;
		}
	}
}

function insertAvl(node, data) {
	if (node == null) {
		node = new Object();
		node.data = data;
		return node;
	} else {
		if (data < node.data) {
			node.left = insert(node.left, data);
		} else {
			node.right = insert(node.right, data);
		}

		var heightLeft  = height(node.left);
		var heightRight = height(node.right);

		return node;

	}
}

function count(node) {
	if (node == null) {
		return 0;
	} else {
		return 1 + count(node.left) + count(node.right);
	}
}

function print(node, level) {
	if (node != null) {
		var s = "";
		for (var i = 0; i < level-1; i++) {
			s += " ";
		}
		if (level > 0)
			s += " ";
		s += node.data;
		console.log(s);
		print(node.left,  level+1);
		print(node.right, level+1);
	}
}

function height(node) {
	if (node == null) return 0;
	return 1 + Math.max(height(node.left), height(node.right));
}

function full(node) {
	if (node == null) return true;
	else if (node.left == null && node.right == null) return true;
	else if (node.left != null && node.right != null) return full(node.left) && full(node.right);
	else return false;
}


var root;
/*
root = insert(root, 4);
root = insert(root, 2);
root = insert(root, 6);
root = insert(root, 1);
root = insert(root, 3);
root = insert(root, 5);
root = insert(root, 7);
*/
for (var i = 1; i <= 7; i++) {
	root = insert(root, i);
}

// for (var i = 0; i < 16384; i++) root = insert(root, parseInt(Math.random() * 1000));

print(root, 0);

console.log('height = ' + height(root));
console.log('count  = ' + count(root));
