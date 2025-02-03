# TypeScript Implicit Type Coercion in Addition

This example demonstrates a subtle bug in TypeScript related to implicit type coercion during addition.  While TypeScript usually provides strong typing, it doesn't always prevent implicit type conversion in all situations leading to runtime errors that would otherwise be prevented.

The `add` function is declared to accept two numbers and return a number. However, the code adds a number and a string which will be silently coerced into string concatenation in Javascript.

The solution provides a fix using type guards or more robust type checking to prevent this.

## How to reproduce
1. Save the code in `bug.ts`
2. Compile using `tsc bug.ts`
3. Execute the compiled JavaScript.

The output will be `12`, instead of a type error.