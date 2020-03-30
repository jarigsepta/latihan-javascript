// Destructuring Function

function penjumlahanPerkalian(a, b) {
    return [a + b, a * b];
}

const [jumlahh, kalii] = penjumlahanPerkalian(2, 3);
console.log(jumlahh);
console.log(kalii);


// Destructuring Function Object
function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const {
    bagi,
    tambah,
    kali,
    kurang
} = kalkulasi(10, 2);
console.log(kurang);
console.log(tambah);
console.log(bagi);
console.log(kali);