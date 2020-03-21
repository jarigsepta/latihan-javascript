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

function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }
    c();
  }
  b();
}

a();



// Contoh Execution Context, Hoisting & Scope
function satu() {
  var nama = 'Joko';
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = 'Toni';
satu();
dua('Doddy');
console.log(nama);