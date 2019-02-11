const sum = (...params) => {
  return params.reduce((acc, curr) => acc + curr, 0);
}

const prod = (...params) => {
  return params.reduce((acc, curr) => acc * curr, 0);
}

module.exports = { sum, prod };