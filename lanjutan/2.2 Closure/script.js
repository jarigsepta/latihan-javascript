function init() {
  let nama = "Joni"; // local variable
  function tampilNama() {
    // inner function (closure)
    console.log(nama); // akses ke parent variable
  }
  tampilNama();
}
init();

// closure dg anonymous function
function init() {
  return function(nama) {
    console.log(nama);
  };
}

let panggilNama = init();
panggilNama("Joko");
