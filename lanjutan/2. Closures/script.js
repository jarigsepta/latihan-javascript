// Execution Context, Hoisting & Scope

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// Konsep hoisting
// Window = global object
// this = window

// execution phase

var nama = "Joni";
var umur = 25;

console.log(hello());

function hello() {
  return `Halo, saya ${nama}, saya ${umur} tahun`;
}

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = "Joni";
var username = "@joni";

function cetakURL(username) {
  var instagramURL = "http://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL(username));
