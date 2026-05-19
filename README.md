# ⚡ num-parity-core

> A minimal, fast and reliable Node.js utility to detect number parity (even or odd).

---

## 🚀 Why num-parity-core?

Because number validation should be instant, predictable, and dependency-free.

No frameworks. No noise. Just logic.

---

## 📦 Installation
```bash
 npm install num-parity-core 
```
---

## 🧠 Usage
```js
const { isEven, parity } = require("num-parity-core");

// Boolean check
console.log(isEven(10)); // true
console.log(isEven(7));  // false

// Human-readable result
console.log(parity(10)); // "even"
console.log(parity(7));  // "odd"
```
---

## ⚙️ API Reference
```js
isEven(number)
```
Returns true if the number is even, otherwise false.
```js
isEven(4); // true
isEven(9); // false
parity(number)
```
Returns a string representing the number parity:

"even"
"odd"
```js
parity(2); // "even"
parity(3); // "odd"
```
---

## 🧪 Example
```js
for (let i = 1; i <= 10; i++) {
  console.log(i, "→", parity(i));
}
```
Output:
```bash
1 → odd
2 → even
3 → odd
4 → even
5 → odd
6 → even
7 → odd
8 → even
9 → odd
10 → even
```
---

## ⚡ Features

⚡ Ultra lightweight
🧠 Zero dependencies
🚀 Fast execution
📦 Works in Node.js
🧩 Simple and predictable API

---

## 📌 Roadmap
TypeScript support
ESM module support
CLI tool (npx num-parity-core)
Browser compatibility
Benchmark optimizations
🤝 Contributing

Pull requests are welcome.

Keep it simple. Keep it clean.

---

## 📄 License

MIT — use freely, build freely, improve freely.

---