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

    insertAt(index, data) {
        // index가 0보다 작으면 에러

        // 새 node를 변수에 담기
        const newNode = new Node(data);

        if(index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;

            for(let i = 0; i < index - 1 ; i++) {
               currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }

        this.count ++;
    }
}

export { LinkedList };
