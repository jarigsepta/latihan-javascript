// Execution Context, Hoisting & Scope

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// Konsep hoisting
// Window = global object
// this = window

// execution phase

var nama = 'Joni';
var umur = 25;

console.log(hello());


function hello() {
    return (`Halo, saya ${nama}, saya ${umur} tahun`);;
}