import demo from './demo.js';

const arr1 = [1,2,3];
const arr2 = [4,5,6,8,9];
console.log([...arr1, ...arr2]);

async function initDemo () {
  let data = await demo();
  console.log(data);
}

initDemo();
