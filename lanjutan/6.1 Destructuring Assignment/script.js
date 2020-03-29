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

// swap items
let d = 1;
let e = 2;
console.log(d);
console.log(e);
[d, e] = [e, d];
console.log(d);
console.log(e);

// return value pada function
function tes() {
    return [1, 2]
}

const [f, g] = tes();
console.log(g);

// rest parameter
const [h, ...bebas] = [1, 2, 3, 4, 5, 6];
console.log(h);
console.log(bebas);


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

// assignment tanpa deklarasi object
({
    namaa,
    umurr
} = {
    namaa: 'Joko',
    umurr: 23
});
console.log(namaa);

// assignment ke variabel baru
const pelajar = {
    nama: 'samsul',
    umur: 17
}

const {
    nama: n,
    umur: u
} = pelajar;
console.log(u);