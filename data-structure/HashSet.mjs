import { HashTable } from "./HashTable2.mjs";

class HashSet {
    constructor() {
        this.hashTable = new HashTable();
    }

    add(data) {
        if(this.hashTable.get(data) == null) {
            // set(key, value)
            // key는 data, value는 사용하지 않아서 1로 설정
            this.hashTable.set(data, 1);
        }
    }

    // 데이터가 있는지 체크
    isContain(data) {
        return this.hashTable.get(data) != null;
    }

    // 데이터 한건만 삭제
    remove(data) {
        this.hashTable.remove(data);
    }

    clear() {
        // 그냥 간단하게 새로운 해시테이블을 만들어도 되는데...
        // this.hashTable = new HashTable();

        // 직접 순회해서 초기화 하는 방법도 있음
        for(let i = 0; i < this.hashTable.arr.length; i++ ) {
            this.hashTable.arr[i].clear();
        }
    }

    isEmpty() {
        let result = true;

        for(let i = 0; i < this.hashTable.arr.length; i++ ) {
            if(this.hashTable.arr[i].head != null) {
                result = false;
                break;
            }
        }

        return result;
    }

    printAll() {
        for(let i = 0; i < this.hashTable.arr.length; i++ ) {
            // 처음에는 arr[0]의 head를 currentNode에 대입
            let currentNode = this.hashTable.arr[i].head;

            // currentNode가 null이 아닐때까지 반복
            while(currentNode != null) {
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        }
    }
}

export { HashSet };
