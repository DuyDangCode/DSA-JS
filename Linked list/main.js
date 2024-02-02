import LinkedList from './LinkedList.js';

const linkedList = new LinkedList();
linkedList.append(16);
linkedList.append(16);
linkedList.append(16);
linkedList.append(16);
linkedList.append(16);
linkedList.append(17);
linkedList.append(18);
// linkedList.prepend(16);

// console.log(linkedList.toArray());
console.log(linkedList.toString());
// console.log(linkedList.find({ value: 16 }));

linkedList.delete(16);
linkedList.deleteTail();

console.log(linkedList.toString());
