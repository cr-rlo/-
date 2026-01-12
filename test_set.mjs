import { HashSet } from './HashSet.mjs';

let hashSet = new HashSet();
console.log( `isEmpty: ${hashSet.isEmpty()}` ); // true
console.log("==== 데이터 삽입 ====");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(512);
hashSet.printAll();

console.log( `isEmpty: ${hashSet.isEmpty()}` ); // false

console.log("==== 데이터 체크 1 ====");
console.log( `isContain: 1 : ${hashSet.isContain(1)}` ); // true

console.log(" ==== 데이터 1제거 ====");
hashSet.remove(1);
hashSet.printAll();
console.log( `isEmpty: ${hashSet.isEmpty()}` ); // false

console.log("==== 데이터 체크 2 ====");
console.log( `isContain: 1 : ${hashSet.isContain(1)}` ); // false

console.log("==== clear ====");
hashSet.clear();
hashSet.printAll();
console.log( `isEmpty: ${hashSet.isEmpty()}` ); // true