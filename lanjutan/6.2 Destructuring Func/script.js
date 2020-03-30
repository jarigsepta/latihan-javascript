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


// Destructuring Function Arguments
const mhs1 = {
    nama: 'Joko',
    umur: 23,
    email: 'joko1@gmail.com',
    nilai: {
        tugas: 90,
        uts: 85,
        uas: 80
    }
}

function cetakMhs({
    nama,
    umur,
    email,
    nilai: {
        tugas,
        uts,
        uas
    }
}) {
    return `Halo, nama ${nama}, umur ${umur} tahun, email ${email} dan nilai tugas ${tugas}, uts ${uts}, uas ${uas}`;
}

console.log(cetakMhs(mhs1));