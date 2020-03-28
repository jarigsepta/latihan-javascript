// Array
const coba = ['satu', 'dua', 'tiga'];

const [a, b, c] = coba;
console.log(a);
console.log(b);
console.log(c);

// Skipping items dg array
const perkenalan = ['Halo', 'nama', 'saya', 'septa'];
const [salam, , , name] = perkenalan;
console.log(salam);

// Object Literal
const mhs = {
    nama: 'Joko',
    umur: 23,
    email: 'joko123@gmail.com'
};

const {
    nama,
    umur,
    email
} = mhs;
console.log(nama);
console.log(umur);
console.log(email);