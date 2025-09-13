// src/control.ts
export function runControlExamples(): void {
  console.log("\n--- Control Statements ---");

  // if / else
  const num = 2;
  if (num > 0) {
    console.log("if/else: num is positive");
  } else if (num < 0) {
    console.log("if/else: num is negative");
  } else {
    console.log("if/else: num is zero");
  }

  // for loop
  const arr = [10, 20, 30];
  console.log("for loop:");
  for (let i = 0; i < arr.length; i++) {
    console.log(`  index ${i} -> ${arr[i]}`);
  }

  // for-of (cleaner)
  console.log("for-of (values):");
  for (const val of arr) {
    console.log(" ", val);
  }

  // while loop
  console.log("while loop count 1..3:");
  let i = 1;
  while (i <= 3) {
    console.log(" ", i);
    i++;
  }

  // switch
  console.log("switch example:");
  switch (num) {
    case 1:
      console.log("  one");
      break;
    case 2:
      console.log("  two");
      break;
    default:
      console.log("  other");
  }

  // ternary + short useful pattern
  const status = num % 2 === 0 ? "even" : "odd";
  console.log("ternary result:", status);
}
