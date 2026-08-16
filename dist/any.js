"use strict";
// learn any type
// no checking type required and using unsafe
let data = "React";
data = 123;
data = true;
console.log(data);
// Why are not using the any type in typescript
let value = "Hello";
value = 123;
console.log(value.toUpperCase());
// Actally, Find facing the issue of
// TypeError: value.toUpperCase is not a function
