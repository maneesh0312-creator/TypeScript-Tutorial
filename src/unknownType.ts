// learn unknown type
// checking type required and using safe

let unknownValue: unknown = "Hello"

if(typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

