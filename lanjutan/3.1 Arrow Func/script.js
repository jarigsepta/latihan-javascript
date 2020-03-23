const menampilkanNama = () => `Hello World`;
console.log(menampilkanNama);

// implisit return
const tNama = nama => `Halo, ${nama}`;
console.log('Erik');

const tampilNama = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`
}

console.log(tampilNama('Erik', 'Malam'));


// contoh arrow function
let mahasiswa = ['Tantowi', 'Ahmad', 'Kevin'];
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);


let jHuruf = mahasiswa.map(nama => ({
    nama,
    jmlHuruf: nama.length
}));
console.table(jHuruf);