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
    return function (nama) {
        console.log(nama);
    };
}

let panggilNama = init();
panggilNama("Joko");


// factory function
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam')

console.dir(selamatMalam('Joni'));



// contoh kasus closure
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

function MyObject(nama, pesan) {
    this.nama = nama.toString();
    this.pesan = pesan.toString();
}
MyObject.prototype.getNama = function () {
    return this.nama;
};
MyObject.prototype.getPesan = function () {
    return this.pesan;
};