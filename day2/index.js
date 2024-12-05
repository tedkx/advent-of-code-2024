const fs = require("fs");

const input = fs.readFileSync(__dirname + "/input.txt", "utf8").split("\n");

let dampener = true; // false for part 1, true for part 2

const isReportSafe = (levels) => {
  if (levels[1] === levels[0]) return false;

  const increasing = levels[1] > levels[0];

  for (let i = 1; i < levels.length; i++) {
    if (increasing && levels[i] <= levels[i - 1]) return false;
    if (!increasing && levels[i] >= levels[i - 1]) return false;
    if (Math.abs(levels[i] - levels[i - 1]) > 3) return false;
  }

  return true;
};

const safeReportsCount = input.reduce((sum, report) => {
  let isSafe = isReportSafe(report.split(" ").map(Number));

  if (isSafe) return sum + 1;

  if (!dampener) return sum;
  for (let i = 0; i < report.length; i++)
    if (
      isReportSafe(
        report
          .split(" ")
          .filter((_, idx) => idx !== i)
          .map(Number)
      )
    )
      return sum + 1;

  return sum;
}, 0);

console.log("safe reports", safeReportsCount);
