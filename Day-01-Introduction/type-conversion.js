console.log("5" + 1);   // "51"  — Number 1 gets converted to a string, then concatenated
console.log(5 + "1"); // "51"
console.log("5" - 1);   // 4     — String "5" gets converted to a number, then subtracted
console.log(5 * "10"); // 50
console.log("5" * "2"); // 10    — both strings converted to numbers, then multiplied
console.log(true + 1);  // 2     — true is treated as 1
console.log(false - 1); // -1     — false is treated as 0


console.log(Number("25"));    // 25       (string → number)
console.log(String(100));     // "100"    (number → string)
console.log(Boolean(0));      // false    (0 is "falsy")
console.log(Boolean(25));   // true
console.log(Boolean(""));     // false    (empty string is "falsy")
console.log(Boolean("hi"));   // true     (non-empty string is "truthy")
console.log(Boolean(1));      // true     (any non-zero number is "truthy")