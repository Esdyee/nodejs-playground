class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.count = 0;
	}

	printAll() {
		let currentNode = this.head;
		let text = '[';

		while(currentNode) {
			text += currentNode.data;
			currentNode = currentNode.next;

			if(currentNode) {
				text += ', ';
			}
		}

		text += ']';
		console.log(text);
	}

	clear() {
		this.head = null;
		this.count = 0;
	}
	
	insertAt(index, data) {
		if(index > this.count || index < 0) {
			throw new Error('Index out of bounds');
		}

		let newNode = new Node(data);

		if(index === 0) {
			newNode.next = this.head; // 인덱스가 0인 경우, 새 노드의 next를 현재 head로 설정
			this.head = newNode; // 새 노드를 head로 설정
		} else {
			let currentNode = this.head;

			for(let i = 0; i < index -1; i++) {
				currentNode = currentNode.next;
			}

			newNode.next = currentNode.next;
			currentNode.next = newNode;
		}
		this.count++;
	}

	insertLast(data) {
		this.insertAt(this.count, data);
	}

	deleteAt(index) {
		if(index > this.count || index < 0) {
			throw new Error('Index out of bounds');
		}

		let currentNode = this.head;

		if (index === 0) {
			let deleteNode = this.head;
			this.head = currentNode.next;
			this.count--;
			return deleteNode;
		} else {
			for(let i = 0; i < index - 1; i++) {
				currentNode = currentNode.next;
			}

			let deleteNode = currentNode.next;
			currentNode.next = currentNode.next.next;
			this.count--;

			return deleteNode;
		}
	}

	deleteLast() {
		return this.deleteAt(this.count - 1);
	}

	getNodeAt(index) {
		if(index >= this.count || index < 0) {
			throw new Error('Index out of bounds');
		}

		let currentNode = this.head;
		for(let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}

		return currentNode;
	}
}

export { Node, LinkedList };
