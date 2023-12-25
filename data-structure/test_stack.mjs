import { Stack } from './Stack.mjs';

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log('--- 두번째 출력 ---');

console.log(stack.peek().data);

console.log(stack.isEmpty());

stack.pop().data;

console.log(stack.isEmpty());
