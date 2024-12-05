const fs = require("fs");

const input = fs.readFileSync(__dirname + "/input.txt", "utf8").split("\n");

const { left, right } = input.reduce(
  (acc, line) => {
    const [item1, item2] = line.split("   ").map(Number);
    acc.left.push(item1);
    if (!acc.right[item2]) acc.right[item2] = 0;
    acc.right[item2]++;
    return acc;
  },
  { left: [], right: {} }
);

const sum = left.reduce((acc, item) => acc + item * (right[item] || 0), 0);

console.log("sum", sum);
