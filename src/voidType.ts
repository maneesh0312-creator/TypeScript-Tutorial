// learning void type in typescript
// void type is not return the value in the function

function hello(): void {
    console.log("Hello World")
}

const helloWorld = hello()

console.log(helloWorld) // undefined