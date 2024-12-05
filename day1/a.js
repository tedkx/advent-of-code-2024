const fs = require("fs");

const input = fs.readFileSync(__dirname + "/input.txt", "utf8").split("\n");

const [arr1, arr2] = input.reduce(
  (acc, line) => {
    const [item1, item2] = line.split("   ");
    acc[0].push(item1);
    acc[1].push(item2);
    return acc;
  },
  [[], []]
);

arr1.sort();
arr2.sort();

const sum = arr1.reduce(
  (acc, item, index) => acc + Math.abs(item - arr2[index]),
  0
);

console.log("sum", sum);
