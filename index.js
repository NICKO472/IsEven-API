function isEven(number) {
  if (typeof number !== "number") {
    throw new Error("O valor precisa ser um número");
  }

  return number % 2 === 0;
}

function parity(number) {
  if (typeof number !== "number") {
    throw new Error("O valor precisa ser um número");
  }

  return number % 2 === 0 ? "even" : "odd";
}

module.exports = {
  isEven,
  parity
};