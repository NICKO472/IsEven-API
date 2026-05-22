const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

function isEven(value) {
  const num = Number(value);

  if (!Number.isFinite(num)) {
    throw new Error("Valor inválido");
  }

  if (num > MAX || num < MIN) {
    throw new Error("Número fora do limite seguro do JavaScript");
  }

  return num % 2 === 0;
}

function parity(value) {
  const num = Number(value);

  if (!Number.isFinite(num)) {
    throw new Error("Valor inválido");
  }

  if (num > MAX || num < MIN) {
    throw new Error("Número fora do limite seguro do JavaScript");
  }

  return num % 2 === 0 ? "even" : "odd";
}

module.exports = {
  isEven,
  parity
};