//Basic Example
(function () {
  console.log("Hello");
})();

// with parameters
(function (a, b) {
  console.log(a + b);
})(5, 10);

//Returning Value
let sq = (function(n) {
  return n * n;
})(6);

console.log(sq);
