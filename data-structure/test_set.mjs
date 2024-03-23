import { HashSet } from "./HashSet.mjs";

let hashSet = new HashSet();

console.log(`isEmpty: ${hashSet.isEmpty()}`);
console.log('==== 데이터 삽입 ====');

hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(123);
hashSet.add(512);

console.log(`isEmpty: ${hashSet.isEmpty()}`);
console.log('==== 데이터 체크 ====');
console.log(`isContain: 1이 있는가? ${hashSet.isContain(1)}`);
console.log(`isContain: 2가 있는가? ${hashSet.isContain(2)}`);
console.log('==== 데이터 제거 ====');

hashSet.remove(1);

hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);

console.log('==== 데이터 체크 ====');
console.log(`isContain: ${hashSet.isContain(1)}`);


console.log('==== 데이터 초기화 ====');
hashSet.clear();
hashSet.printAll();
console.log(`isEmpty: ${hashSet.isEmpty()}`);


