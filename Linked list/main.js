import LinkedList from './LinkedList.js';

const linkedList = new LinkedList();
linkedList.append(16);
linkedList.append(16);
linkedList.append(16);
linkedList.append(16);
linkedList.append(16);
linkedList.append(16);
linkedList.append(17);
// linkedList.prepend(16);

// console.log(linkedList.toArray());
console.log(linkedList.toString());
linkedList.delete(16);
console.log(linkedList.toString());
