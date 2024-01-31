import LinkedList from './LinkedList.js';

const linkedList = new LinkedList();
linkedList.append(12);
linkedList.append(13);
linkedList.append(14);
linkedList.append(15);
linkedList.append(16);
linkedList.append(16);
linkedList.append(16);
linkedList.prepend(16);

// console.log(linkedList.toArray());
console.log(linkedList.toString());
