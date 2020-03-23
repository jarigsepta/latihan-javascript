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