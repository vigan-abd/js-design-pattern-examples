// Prototype Pattern
// Skeleton
const carSkeleton = {
  noOfWheels: 4,
  start() {
    return 'started';
  },
  stop() {
    return 'stopped';
  },
};

// Object.create(proto[, propertiesObject])
const myCar = Object.create(carSkeleton, { owner: { value: 'John' }, noOfWheels: { value: 6 } });
console.log("Prototype Pattern", myCar.__proto__, myCar.noOfWheels, myCar.owner); // true
