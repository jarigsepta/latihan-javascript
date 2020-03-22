function init() {
    let nama = 'Joni'; // local variable
    function tampilNama() { // inner function (closure)
        console.log(nama); // akses ke parent variable
    }
    tampilNama();
}
init();