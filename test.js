const inputNumber = 15;

const fizzBuzz = (inputNumber) => {
	for (let i = 1; i <= inputNumber; i++) {
		if (i % 15 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}

fizzBuzz(inputNumber);
// console.log(fizzBuzz(inputNumber));
