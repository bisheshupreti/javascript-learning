//Arithmetic
let a = 10, b = 3;
console.log(a + b);   // 13  (addition)
console.log(a - b);   // 7   (subtraction)
console.log(a * b);   // 30  (multiplication)
console.log(a / b);   // 3.33... (division)
console.log(a % b);   // 1   (modulus/remainder)
console.log(a ** b);  // 1000 (exponent — a to the power of b; this one's new, not in C)

// Assignments
let x = 5;
console.log(x);
x += 3;  // same as x = x + 3  →  x becomes 8
console.log(x);
x -= 2;  // x becomes 6
console.log(x);
x *= 2;  // x becomes 12
console.log(x);
x /= 3;  // x becomes 4
console.log(x);

// Comparision 
let m = 5, n = "5";
console.log(m == n);   // true  — loose equality, only checks VALUE
console.log(m === n);  // false — strict equality, checks VALUE and TYPE
console.log(m != n);   // false — loose "not equal"
console.log(m !== n);  // true  — strict "not equal"
console.log(m > 3);    // true
console.log(n >= 5);   // true
console.log(n <= 5); // true


// Logical 
let age = 20;
console.log(age > 18 && age < 60);  // true  (AND — both must be true)
console.log(age < 18 || age > 60);  // false (OR — at least one true)
console.log(!(age > 18));           // false (NOT — flips the result)

// Ternary Operators
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"