function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

//Using Type Guard
function isNumber(x: any): x is number {
  return typeof x === 'number';
}
function addWithGuard(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(1, "2"); // Still compiles but has runtime error
let result2 = addSafe(1,2); // Correct usage
let result3 = addSafe(1, "2"); // Throws error at runtime
let result4 = addWithGuard(1,2); // Correct Usage
let result5 = addWithGuard(1, "2"); // throws error at runtime
console.log(result1); // Output: 12
console.log(result2); //Output: 3
console.log(result3); // Throws error
console.log(result4); //Output: 3
console.log(result5); // Throws error