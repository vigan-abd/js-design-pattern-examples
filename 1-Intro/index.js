// Functions as first class citizens
const myFunc = () => {
  return 3 + 5;
}

const myRes = myFunc();
console.log(myRes);



// Callbacks/Closures
/**
 * @param {() => any} closure 
 */
const myPrint = (closure) => {
  console.log(closure());
}

myPrint(myFunc);