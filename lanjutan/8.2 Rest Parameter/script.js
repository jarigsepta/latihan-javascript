// Rest Parameter

function myFunc(a, ...myArgs) {
    return myArgs;
}

console.log(myFunc(1, 2, 3, 4, 5));


// dg Arguments
function functionKu() {
    return Array.from(arguments);
}
// mengubah object menjadi array
console.log(functionKu(5, 4, 3, 2, 1));