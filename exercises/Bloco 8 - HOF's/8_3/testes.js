const assert = require('assert');

const sum = (x, y) => {return x + y;};

const divison = (a, b) => {return a / b;};

const expectedSum = sum(4, 6);

console.log(assert.equal(expectedSum, 10));
console.log(assert.notEqual(expectedSum, 6, 'is ten'));

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepEqual(list1, list2, 'deepEqual checks the elements in the arrays are identical');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepEqual(person1, person2, 'these two objects are the same');

const person3 = { name: 'john', age: 19 };

assert.notDeepEqual(person1, person3, 'these two objects are different');



