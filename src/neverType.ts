// learning never type
// doesn't value existing in never type
// Never function finished
// never type used to when function in infinity loop
// Never Type used to handle the error and impossible error

function throwError(message: string): never {
    throw new Error(message);
}

throwError("404 Error");

// infinity Loop inside of function

function infinityLoop():never{
    while(true){
        console.log("Running........")
    }
}
// not call this function
// infinityLoop()