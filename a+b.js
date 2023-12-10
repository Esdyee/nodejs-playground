let fs = require('readline');

// A, B 입력 받기
let rl = fs.createInterface({
	input: process.stdin,
	output: process.stdout
});

const inputArray = [];

rl.on("line", (input) => {
	input.split(' ').forEach((element) => {
		inputArray.push(element);
	});

	console.log(Number(inputArray[0]) + Number(inputArray[1]));

	rl.close();
})
