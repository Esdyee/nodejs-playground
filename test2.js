const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let lines = [];


rl.on('line', (line) => {
	lines.push(Number(line));
});

rl.on('close', () => {
	console.log(lines);
	process.exit(0);
});

function tasks(n, a, b) {

	const graph = new Map();
	for (let i = 0; i < a.length; i++) {
		if (!graph.has(a[i])) {
			graph.set(a[i], new Set());
		}
		graph.get(a[i]).add(b[i]);
	}


	function hasCycle(node, visited, recStack) {
		if (!visited.has(node)) {
			visited.add(node);
			recStack.add(node);

			const neighbors = graph.get(node);
			if (neighbors) {
				for (let neighbor of neighbors) {
					if (!visited.has(neighbor) && hasCycle(neighbor, visited, recStack)) {
						return true;
					} else if (recStack.has(neighbor)) {
						return true;
					}
				}
			}
		}
		recStack.delete(node);
		return false;
	}


	let visited = new Set();
	let recStack = new Set();
	for (let i = 1; i <= n; i++) {
		if (hasCycle(i, visited, recStack)) {
			return n - 1; // 순환 의존성이 있으면 하나의 작업을 수행할 수 없습니다.
		}
	}

	return n; // 순환 의존성이 없으면 모든 작업을 수행할 수 있습니다.
}
