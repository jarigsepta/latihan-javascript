// Synchronous Callback
function halo(nama) {
    alert(`Halo, ${nama}`);
}

function tampilkanPesan(callback) {
    const nama = prompt('Masukkan Nama : ');
    callback(nama);
}

tampilkanPesan(halo);