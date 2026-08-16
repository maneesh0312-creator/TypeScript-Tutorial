"use strict";
// Learning Symbol datatype
// Symbol is a primitive data type which create an unquie value.
let id1 = Symbol();
let id2 = Symbol();
// They have different unquie value
console.log(id1 === id2);
// conflict error
// let userObj1 = {
//     id: 1,
//     id: 2
// }
// How to handle and where is using Symbol type.
// no conflict error
let id3 = Symbol("id");
let id4 = Symbol("id");
let userObj2 = {
    [id3]: 1,
    [id4]: 2
};
console.log(userObj2[id3]);
// How to used in token
let token = Symbol("token");
