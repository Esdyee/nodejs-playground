// const input = require("fs").readFileSync('/dev/stdin').toString().split(' ');

const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let lines = [];


rl.on('line', (line) => {
	lines.push(line);
});

rl.on('close', () => {

	const obj = stringToObject(lines);

	const operation = getOperation(lines[4]);
	const prop = getProp(lines[4]);
	const newValue = getNewValue(lines[4]);


	const resultObject = manipulateStudentRecord(obj, operation, prop, newValue);

	const resultArray = ObjectToString(resultObject);

	const sortedString = sortingObject(resultArray);

	console.log(sortedString);

	process.exit(0);
});

function stringToObject(lines) {
	const obj = {};
	lines.forEach((line, index) => {
		let lineNumber;

		if(index === 0) {
			lineNumber = Number(line);
		}

		if(index >= 1 && index < 4) {
			const splitString = line.split(' ');
			const key = splitString[0];
			const value = splitString[1];
			obj[key] = value;
		}
	});

	return obj;
}

function getOperation(strings) {
	const operation = strings.split(' ');
	return operation[0];
}

function getProp(strings) {
	const prop = strings.split(' ');
	return prop[1];
}

function getNewValue(strings) {
	const newValue = strings.split(' ');
	return newValue[2];
}

function manipulateStudentRecord(obj, operation, prop, newValue) {
	if(operation === "delete") {
		delete obj[prop];
	}

	if(operation === "edit") {
		obj[prop] = newValue;
	}

	return obj;
}

function sortingObject(resultArray) {
	const sortedArray = resultArray.sort();
	const resultString = sortedArray.join('\n');
	return resultString;
}

function ObjectToString(obj) {

	// AS-IS: { name: 'John', lastName: 'bliss', city: 'seattle' }
	// TO-BE: city Seattle, lastName Bliss, name John
	let array = [];
	const keys = Object.keys(obj);
	const values = Object.values(obj);
	const length = keys.length;

	for(let i = 0; i < length; i++) {
		const key = keys[i];
		const value = values[i];

		const strings = `${key} ${value}`;
		array.push(strings);
	}

	return array;
}
